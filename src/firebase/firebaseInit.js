// Use /compat to migrate Firebase Web SDK to version 9 and not face export default issue
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBBebDlBDcGd0EiTPadwIFTfT4-_T-WvZM",
  authDomain: "invoice-app-f8795.firebaseapp.com",
  projectId: "invoice-app-f8795",
  storageBucket: "invoice-app-f8795.appspot.com",
  messagingSenderId: "786703938987",
  appId: "1:786703938987:web:269a5705862d92ba7d4eee",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
