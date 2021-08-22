import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAjYCI8-7j5zTvMbJL7zpM7inlKXWI09tM",
    authDomain: "sweetcake-11262.firebaseapp.com",
    projectId: "sweetcake-11262",
    storageBucket: "sweetcake-11262.appspot.com",
    messagingSenderId: "1014964228801",
    appId: "1:1014964228801:web:6ac873183d31376c743a40"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
}