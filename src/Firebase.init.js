// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSttIB-tIs7h7axnpwRHG1dxJrQ0BKMMA",
    authDomain: "hotel-safwan-auth.firebaseapp.com",
    projectId: "hotel-safwan-auth",
    storageBucket: "hotel-safwan-auth.appspot.com",
    messagingSenderId: "580207143648",
    appId: "1:580207143648:web:ac99c467ff967679f4be85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
