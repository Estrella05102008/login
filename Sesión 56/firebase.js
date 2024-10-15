  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBeV9JdLVz7YagsFb3G68aGGwVsQjLvfcg",
    authDomain: "pruebaformulario-af393.firebaseapp.com",
    projectId: "pruebaformulario-af393",
    storageBucket: "pruebaformulario-af393.appspot.com",
    messagingSenderId: "50976854790",
    appId: "1:50976854790:web:836f66aee9ad1b6f8d4487",
    measurementId: "G-917BXKNV9T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();

export const guardarTarea = (title,description) => {
  addDoc(collection(db,'tareas'),{title,description})
}
