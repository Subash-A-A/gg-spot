import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGX1rkuKBHh03XgO_iPlMtUZEuOOQ5BEw",
  authDomain: "game-db-ae71d.firebaseapp.com",
  projectId: "game-db-ae71d",
  storageBucket: "game-db-ae71d.appspot.com",
  messagingSenderId: "160939141402",
  appId: "1:160939141402:web:2db83fa12f3680d77e64a3",
  measurementId: "G-8ESJ9GE4C9",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
