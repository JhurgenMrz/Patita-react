import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };

  firebase.initializeApp(config);
  
  export const { auth } = firebase;
  export const provider = new firebase.auth.FacebookAuthProvider();
