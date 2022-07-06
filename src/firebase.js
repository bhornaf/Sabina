// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6OsdMMar5gIVPwWb61f8LbXvk8AnhYsU",
    authDomain: "sabina-ecommerce.firebaseapp.com",
    projectId: "sabina-ecommerce",
    storageBucket: "sabina-ecommerce.appspot.com",
    messagingSenderId: "953037836474",
    appId: "1:953037836474:web:6bb296cc1d7b99ba263283",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
