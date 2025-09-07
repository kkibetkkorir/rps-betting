// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUok79YpSN4pzHg8bbYhTMFmDDh7wGG3g",
    authDomain: "rps-betting.firebaseapp.com",
    projectId: "rps-betting",
    storageBucket: "rps-betting.firebasestorage.app",
    messagingSenderId: "341465189820",
    appId: "1:341465189820:web:01b9688f3b7c4b46042fb9",
    measurementId: "G-X0PJC6SYBC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();