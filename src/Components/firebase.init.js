
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyFSxR4QUY7MaY1xQZe03fFyqfti1Qv5E",
  authDomain: "halal-food-f3299.firebaseapp.com",
  projectId: "halal-food-f3299",
  storageBucket: "halal-food-f3299.appspot.com",
  messagingSenderId: "470189305362",
  appId: "1:470189305362:web:5ef0d6379575700581b2cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;