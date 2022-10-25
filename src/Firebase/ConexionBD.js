import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqzYfFjs3F4t_EbfXdBdwPkKVBEj7khkM",
    authDomain: "ligamaxi-69864.firebaseapp.com",
    projectId: "ligamaxi-69864",
    storageBucket: "ligamaxi-69864.appspot.com",
    messagingSenderId: "237586530629",
    appId: "1:237586530629:web:b00fd856a780d2908dbe2c",
    measurementId: "G-3F3JNN3JH3"
  };

  
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  export const auth = getAuth(app);
  const analytics = getAnalytics(app);




