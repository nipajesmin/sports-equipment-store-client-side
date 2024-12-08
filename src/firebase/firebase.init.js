// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjSUaSr_f0UJeV9KwNJ26YE9Ez8pXQVuc",
  authDomain: "sports-equipment-store-c8fd5.firebaseapp.com",
  projectId: "sports-equipment-store-c8fd5",
  storageBucket: "sports-equipment-store-c8fd5.firebasestorage.app",
  messagingSenderId: "1092630726564",
  appId: "1:1092630726564:web:fe99e7b2cfdbe230b36331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);