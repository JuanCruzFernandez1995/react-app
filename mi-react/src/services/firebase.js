import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI5aoMWlqSfRIte0Wk22vuHtwLfcksDMQ",
  authDomain: "mi-react.firebaseapp.com",
  projectId: "mi-react",
  storageBucket: "mi-react.appspot.com",
  messagingSenderId: "739536061152",
  appId: "1:739536061152:web:b89eb77a6daecee5f00685"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);


export default firestoreDB;