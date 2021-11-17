P.42から

## cloud functions向けにnodeインストール

2021/10/05時点では、14系

```
nodenv install 14.17.5
```
## ts.config

```
{
  compilerOptions": {
    ・・・
      "baseUrl": "src",
      "incremental": true,
  },
  "include": ["src"],
  "exclude": ["node_modules", "build", "scripts", "functions"]
}
```

## eslint pretiier設定
```
yarn add -D stylelint prettier
yarn add -D eslint-plugin-react \
            eslint-plugin-react-hooks \
            eslint-plugin-import \
            eslint-plugin-jest \
            eslint-plugin-prefer-arrow \
            eslint-plugin-jsx-a11y \
            eslint-plugin-prettier \
            eslint-config-prettier \
            eslint-config-airbnb
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
yarn add -D stylelint-config-prettier \
            stylelint-config-standard \
            stylelint-order \
            stylelint-config-styled-components \
            stylelint-processor-styled-components
yarn add -D prettier-stylelint
```

## firebaseでfirestoreのdatabaseを作成する

## firebase setup

```
npm install -g firebase-tools
exec $SHELL -l
firebase login
firebase init
```

## firebase deploy

```
yarn build
firebase deploy --only hosting
```

## cloud functions
nodeのバージョン変更 `nodenv local 14.17.5`

tsconfig.json編集

jset install
```
yarn add -D jest ts-jest @types/jest
```

lint, prettier 設定

```
yarn adds -D eslint prettier
yarn add -D eslint-plugin-import \
            eslint-plugin-jest \
            eslint-plugin-prefer-arrow \
            eslint-plugin-prettier \
            eslint-config-prettier \
            eslint-config-airbnb-base
yarn add -D @typescript-eslint/parser \
            @typescript-eslint/eslint-plugin
```

package.json編集



## firebase

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApTcXI_pw8MgH1JGDwRSVioDJMhLyLI-o",
  authDomain: "symphony-apps-demo.firebaseapp.com",
  projectId: "symphony-apps-demo",
  storageBucket: "symphony-apps-demo.appspot.com",
  messagingSenderId: "133358958499",
  appId: "1:133358958499:web:df04048652f4c042f88c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```
