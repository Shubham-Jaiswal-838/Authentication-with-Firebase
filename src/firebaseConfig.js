// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvr1yLUPsSuKYjk599vh4OBmT1LtUquwM",
  authDomain: "reddit-2d3bc.firebaseapp.com",
  projectId: "reddit-2d3bc",
  storageBucket: "reddit-2d3bc.appspot.com",
  messagingSenderId: "528015523363",
  appId: "1:528015523363:web:1e81f6cd17d8d8714c7b96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {app, auth, provider};


