import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import FirebaseAuthProvider from 'routes/providers/firebaseAuthProvider';
import App from './App';
import { ThemeContext } from './contexts';
import symphonyTheme from './theme';
import firebaseConfig from './firebase-config';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.scss';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <FirebaseAuthProvider>
      <ThemeContext.Provider value={symphonyTheme}>
        <App />
      </ThemeContext.Provider>
    </FirebaseAuthProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
