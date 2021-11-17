import firebase from 'firebase/compat/app';
import { User as FirebaseUser } from 'firebase/auth';
import { Firestore, doc, getDoc, writeBatch } from 'firebase/firestore';

import { isEmpty } from 'lodash';
import { User, blankUser } from 'models/user';
import { collectionName } from 'models/collections';

export const writeUser = async (
  db: Firestore,
  firebaseUser: FirebaseUser,
  credential: firebase.auth.UserCredential,
) => {
  const id = firebaseUser.uid;
  const { displayName } = firebaseUser;
  const photoUrl = firebaseUser.photoURL;
  let providerUid = '';
  let screenName = '';
  let description = '';

  if (credential.additionalUserInfo) {
    if (credential.additionalUserInfo.username) {
      screenName = credential.additionalUserInfo.username;
    }
    if (credential.additionalUserInfo.profile) {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      providerUid = (credential.additionalUserInfo.profile as any).id_str;
      description =
        (credential.additionalUserInfo.profile as any).description || '';
      /* eslint-enable */
    }
  }

  if (!providerUid || !screenName) {
    throw new Error('Invalid credential information.');
  }

  let theUser: User | null = null;
  const batch = writeBatch(db);
  const docRef = doc(db, collectionName.users, id);
  const userDoc = await getDoc(docRef);

  if (userDoc.exists()) {
    const user = userDoc.data() as User;
    const diff: Partial<User> = {};
    if (user.description !== description) {
      diff.description = description;
    }
    if (user.displayName !== displayName) {
      diff.displayName = displayName;
    }
    if (user.photoUrl !== photoUrl) {
      diff.photoUrl = photoUrl;
    }
    if (!isEmpty(diff)) {
      batch.update(docRef, {
        ...diff,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    theUser = { ...diff, ...user, id: userDoc.id };
  } else {
    const user: User = {
      ...blankUser,
      providerUid,
      screenName,
      displayName,
      description,
      photoUrl,
    };
    batch.set(userDoc.ref, {
      ...user,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    theUser = { ...user, id: userDoc.id };

    const counterRef = doc(
      db,
      collectionName.docCounters,
      collectionName.users,
    );
    batch.set(
      counterRef,
      {
        count: firebase.firestore.FieldValue.increment(1),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
  }
  await batch.commit();

  return theUser;
};
