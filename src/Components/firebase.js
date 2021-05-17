import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCu0P9P9W7_8KkjBBEXRh9rLkHJYs_N1z4",
  authDomain: "bibliophile-1.firebaseapp.com",
  projectId: "bibliophile-1",
  storageBucket: "bibliophile-1.appspot.com",
  messagingSenderId: "839035933990",
  appId: "1:839035933990:web:53105a76785f300ab01de7",
  measurementId: "G-964CL0BL72",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
