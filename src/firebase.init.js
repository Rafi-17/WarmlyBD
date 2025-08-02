// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUBrKCcwruFLUuUiB4Wxk_fcUM3gthKLw",
  authDomain: "warmlybd.firebaseapp.com",
  projectId: "warmlybd",
  storageBucket: "warmlybd.firebasestorage.app",
  messagingSenderId: "807669831224",
  appId: "1:807669831224:web:d94c495dac3716bad6b8cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
