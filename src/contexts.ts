import firebase from 'firebase/compat/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

import { createContext } from 'react';
import { User } from 'models/user';

import symphonyTheme from './theme';

type FirebaseContextValue = {
  auth: Auth | null;
  db: Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
});

type UserContextValue = {
  user: User | null;
  credential: firebase.auth.UserCredential | null;
  setCredential: (credential: firebase.auth.UserCredential | null) => void;
  loading: boolean;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  credential: null,
  setCredential: () => undefined,
  loading: true,
});

export const ThemeContext = createContext(
  (null as unknown) as typeof symphonyTheme,
);
