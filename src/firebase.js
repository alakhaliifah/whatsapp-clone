// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXLSK6g-v2D1NeuJUugCspabqwr-VfWJ4",
  authDomain: "whatsapp-clone-chat.firebaseapp.com",
  projectId: "whatsapp-clone-chat",
  storageBucket: "whatsapp-clone-chat.appspot.com",
  messagingSenderId: "431598220571",
  appId: "1:431598220571:web:aac072fd3a6c5a33f78fbe",
  measurementId: "G-4MH6VBK0ZP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;