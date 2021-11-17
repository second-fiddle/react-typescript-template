import { Command } from 'commander';
import admin from 'firebase-admin';
import fs from 'fs';
import parse from 'csv-parse/lib/sync';

import { Colony } from '../services/symphony/models/Colony';
import { collectionName } from '../services/symphony/constants';
import { addCounter } from '../firestore-admin/record-counter';

import serviceAccount from '../symphony-apps-demo-firebase-adminsdk.json';

// TODO 全データ投入スクリプトに拡張

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://symphony-apps-demo.firebaseio.com', // TODO database名を動的にする
});

const db = admin.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

const uploadSeed = async (collection: string, seedFile: string) => {
  const buffer = fs.readFileSync(seedFile);
  const records = parse(buffer.toString(), {
    columns: true,
    delimiter: '\t',
    skip_empty_lines: true,
  });
  const ref = db.collection(collection);

  switch (collection) {
    case collectionName.colonies: {
      const docs: Required<Colony>[] =
        records.map((record: Colony) => ({
          ...record,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        })) || [];

      for await (const doc of docs) {
        const { ...docWithoutId } = doc;
        await ref.doc().set(docWithoutId);
      }

      await addCounter(db, collection, docs.length);

      return;
    }

    default: {
      throw new Error('specify target collection');
    }
  }
};

const commander = new Command();
commander
  .version('0.1.0', '-V, --version')
  .arguments('<collection> <seedFile>')
  .action(uploadSeed);

commander.parse(process.argv);
