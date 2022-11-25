// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjTJmlVaYNwAPrROnxAkry82T_MhcMn-8",
    authDomain: "t-phone-reseller-shop.firebaseapp.com",
    projectId: "t-phone-reseller-shop",
    storageBucket: "t-phone-reseller-shop.appspot.com",
    messagingSenderId: "396834663456",
    appId: "1:396834663456:web:139aaf2cde29b342c7a045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;