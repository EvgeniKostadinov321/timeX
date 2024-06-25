
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyANVGbF6I-E0GcRlGNOqwfAW6FL405W2aI",
  authDomain: "watch-store-2db3e.firebaseapp.com",
  projectId: "watch-store-2db3e",
  storageBucket: "watch-store-2db3e.appspot.com",
  messagingSenderId: "564945623168",
  appId: "1:564945623168:web:0f9ecdf8212ca79df76e65",
  databaseURL: 'https://watch-store-2db3e-default-rtdb.europe-west1.firebasedatabase.app'
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;