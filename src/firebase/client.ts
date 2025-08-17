import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

export const firebaseConfig = {
  apiKey: "AIzaSyDJeIrf24oL58VWbuQyIYM17gpm81Z0ElY",
  authDomain: "dr-ewald.firebaseapp.com",
  projectId: "dr-ewald",
  storageBucket: "dr-ewald.appspot.com",
  messagingSenderId: "763402872296",
  appId: "1:763402872296:web:b69bacbc055f28ca21705d",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

