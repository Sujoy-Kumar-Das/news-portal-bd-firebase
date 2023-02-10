// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9rpuBaXskli4yYm4YFIsuKUW45CH4_k4",
  authDomain: "news-portal-bd-firebase.firebaseapp.com",
  projectId: "news-portal-bd-firebase",
  storageBucket: "news-portal-bd-firebase.appspot.com",
  messagingSenderId: "685334265092",
  appId: "1:685334265092:web:126a1bb22bd852c0f9a451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;