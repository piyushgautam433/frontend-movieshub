import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCoOwMMotQze9ag7kti29_oQpg-nf6uI1A",
  authDomain: "react-moviehub.firebaseapp.com",
  projectId: "react-moviehub",
  storageBucket: "react-moviehub.appspot.com",
  messagingSenderId: "42664204036",
  appId: "1:42664204036:web:30a58bd1ef2d0f492d6251",
  measurementId: "G-ZRCTY2CLY5"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);