import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCCC0vfysrvZGDeVxEzwL-zHEL6dthPz8g",
    authDomain: "zillow-project-74055.firebaseapp.com",
    databaseURL: "https://zillow-project-74055.firebaseio.com",
    projectId: "zillow-project-74055",
    storageBucket: "zillow-project-74055.appspot.com",
    messagingSenderId: "697665035909"
  };

  firebase.initializeApp(config);
//ignore
export default app;

