 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBsWNjEzoVLZDwcHJB4PPzX3mm3RTtl8sg",
    authDomain: "lht-landcalculator-login.firebaseapp.com",
    projectId: "lht-landcalculator-login",
    storageBucket: "lht-landcalculator-login.firebasestorage.app",
    messagingSenderId: "662869408061",
    appId: "1:662869408061:web:6b54ea2ce62999253aed54"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };
