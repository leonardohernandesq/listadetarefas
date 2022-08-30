import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD-fYid052i1eiAdNlvx9OkvRN0UiCP2IM",
    authDomain: "cursosujeito-339cc.firebaseapp.com",
    projectId: "cursosujeito-339cc",
    storageBucket: "cursosujeito-339cc.appspot.com",
    messagingSenderId: "226058249693",
    appId: "1:226058249693:web:2e73b88aa9256c280b8234",
    measurementId: "G-XEWRCS2DYY"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };