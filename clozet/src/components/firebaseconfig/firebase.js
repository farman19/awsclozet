import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBhNF6mYROsf1e1SNbxRJawfX3CDEIdZQY",
    authDomain: "fir-node-accf1.firebaseapp.com",
    projectId: "fir-node-accf1",
    storageBucket: "fir-node-accf1.firebasestorage.app",
    messagingSenderId: "490066646051",
    appId: "1:490066646051:web:b4921980b61326788ecd96",
    measurementId: "G-TCS5G4YP1D"
  };

  const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
  export const db = getFirestore(app);


  export default app;