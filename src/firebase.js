import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";



var firebaseConfig = {
    apiKey: "AIzaSyAIOBx3rTtGTFHlIxejel5BT3eRhFvAD4M",
    authDomain: "mealsdelivery-7a7da.firebaseapp.com",
    projectId: "mealsdelivery-7a7da",
    storageBucket: "mealsdelivery-7a7da.appspot.com",
    messagingSenderId: "289873625522",
    appId: "1:289873625522:web:621091e979031598b424ab",
    measurementId: "G-JX6TWHHC9K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;