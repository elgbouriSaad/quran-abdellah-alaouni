// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTgpWaOQVe07-cnx-nebocQXnsTy8SFYs",
  authDomain: "quran-recitation-8544a.firebaseapp.com",
  projectId: "quran-recitation-8544a",
  storageBucket: "quran-recitation-8544a.appspot.com",
  messagingSenderId: "592699462834",
  appId: "1:592699462834:web:9792dfebc977f52fe9a5ab",
  measurementId: "G-S8TMBPR05F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { storage };