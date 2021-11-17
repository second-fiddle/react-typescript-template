import firebase from 'firebase/compat/app';

export type Colony = {
  id?: string;
  colonyCd: string;
  colonyName: string;
  areaCd: string;
  prefectureCd: string;
  createdAt: firebase.firestore.Timestamp | null;
  updatedAt: firebase.firestore.Timestamp | null;
};
