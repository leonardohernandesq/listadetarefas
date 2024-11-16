import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXX",
    projectId: "listadetarefas-XXXXXXXXX",
    storageBucket: "listadetarefasXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"    
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };