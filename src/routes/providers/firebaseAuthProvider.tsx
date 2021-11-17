import { FC, useEffect, useRef, useState } from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { findUser } from 'services/users';
import { User } from 'models/user';
import history from 'utils/history';
import { FirebaseContext, UserContext } from '../../contexts';

const FirebaseAuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [
    credential,
    setCredential,
  ] = useState<firebase.auth.UserCredential | null>(null);
  const counterRef = useRef(0);
  const auth = getAuth();
  const db = getFirestore();

  /* eslint-disable */
  const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      if (user) {
        const theUser = await findUser(db, firebaseUser.uid);
        setUser(theUser);
        history.push('/');
      }
    } else {
      setUser(null);
    }
    setLoading(false);
  });

  useEffect(() => {
    if (credential) {
      counterRef.current += 1;
    }

    return unsubscribe;
    // don't suppress trigger with using deps to enable counter
  });

  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      <UserContext.Provider
        value={{ user, credential, setCredential, loading }}
      >
        {!loading && children}
      </UserContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseAuthProvider;
