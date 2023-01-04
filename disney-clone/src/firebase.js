import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCYfJ70TAt_E9ddo9yEMVSQBJmUvbllHYg",
    authDomain: "disneyweb-clone.firebaseapp.com",
    projectId: "disneyweb-clone",
    storageBucket: "disneyweb-clone.appspot.com",
    messagingSenderId: "846667116929",
    appId: "1:846667116929:web:28ac9b243c67b3fa71f880",
    measurementId: "G-50T113EJ08"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
