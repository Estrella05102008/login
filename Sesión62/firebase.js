  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDynRNmQk0YJVE83dYMnR7DqqP6vNlHmp8",
    authDomain: "loginproyecto-83f7e.firebaseapp.com",
    projectId: "loginproyecto-83f7e",
    storageBucket: "loginproyecto-83f7e.appspot.com",
    messagingSenderId: "220048868323",
    appId: "1:220048868323:web:81a654ffcbfa0dd83c96d6",
    measurementId: "G-BR84M4Z3JE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  