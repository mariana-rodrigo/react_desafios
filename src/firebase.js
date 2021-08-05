import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCjl95db4uN8QoKC9OkRN8ltkzoxzY9Sqs",
    authDomain: "coder-react.firebaseapp.com",
    projectId: "coder-react",
    storageBucket: "coder-react.appspot.com",
    messagingSenderId: "487728061563",
    appId: "1:487728061563:web:8f9d3cf543c174189516de"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
}