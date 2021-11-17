import { Firestore, doc, getDoc } from 'firebase/firestore';

import { collectionName } from 'models/collections';
import { User } from 'models/user';

export const findUser = async (db: Firestore, id: string) => {
  let theUser: User | null = null;
  const docRef = doc(db, collectionName.users, id);
  const userDoc = await getDoc(docRef);

  if (userDoc.exists()) {
    const user = userDoc.data() as User;
    theUser = { ...user, id: userDoc.id };
  }

  return theUser;
};
