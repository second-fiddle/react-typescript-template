106ページから

> DBリセット

yarn dbreset

> データ投入

node lib/commands/dbseed.js colonies seeds/colonies.tsv
yarn dbseed


> データ削除

firebase firestore:delete colonies


> deploy

firebase deploy --only functions

ローカルでちょっと確認

GOOGLE_APPLICATION_CREDENTIALS=./src/symphony-apps-demo-firebase-adminsdk.json firebase serve --only functions

> 環境変数セット

firebase functions:config:set locale.region="asia-northeast1" locale.timezone="Asia/Tokyo"
firebase functions:config:get > .runtimeconfig.json

functions.config().locale.region

> index

firebase firestore:indexes > firestore.indexes.json
firebase deploy --only firestore:indexes

