import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "****",
  authDomain: "example.firebaseapp.com",
  projectId: "challenge2020",
  storageBucket: "example.com",
  messagingSenderId: "****",
  appId: "****"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };