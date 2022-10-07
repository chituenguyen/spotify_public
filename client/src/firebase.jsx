import "firebase/auth";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9C0e3XBhYr9Dp7bSv7vsCOeyovjIr390",
  authDomain: "spotifyforfree-38227.firebaseapp.com",
  projectId: "spotifyforfree-38227",
  storageBucket: "spotifyforfree-38227.appspot.com",
  messagingSenderId: "478696239209",
  appId: "1:478696239209:web:88b74d0fbeefe2ecb932f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
