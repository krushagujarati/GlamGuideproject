// // src/firebase.js
// import firebase from 'firebase/app';
// import 'firebase/auth';  // For Authentication
// import 'firebase/firestore';  // For Firestore Database

// // Firebase configuration object from the Firebase Console
// const firebaseConfig = {
//     apiKey: "AIzaSyBPmzgUmztPY1U335HjD_PtCN1u6vNiHYs",
//     authDomain: "glamguideproject.firebaseapp.com",
//     projectId: "glamguideproject",
//     storageBucket: "glamguideproject.firebasestorage.app",
//     messagingSenderId: "1059387500675",
//     appId: "1:1059387500675:web:54e805628ec8ab231dd3b6",
//     measurementId: "G-ENZCTYS488"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Export the Firebase services that you will use in your app
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// export default firebase

// src/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBPmzgUmztPY1U335HjD_PtCN1u6vNiHYs",
//     authDomain: "glamguideproject.firebaseapp.com",
//     projectId: "glamguideproject",
//     storageBucket: "glamguideproject.firebasestorage.app",
//     messagingSenderId: "1059387500675",
//     appId: "1:1059387500675:web:54e805628ec8ab231dd3b6",
//     measurementId: "G-ENZCTYS488"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export auth and firestore
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };

// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPmzgUmztPY1U335HjD_PtCN1u6vNiHYs",
    authDomain: "glamguideproject.firebaseapp.com",
    projectId: "glamguideproject",
    storageBucket: "glamguideproject.firebasestorage.app",
    messagingSenderId: "1059387500675",
    appId: "1:1059387500675:web:54e805628ec8ab231dd3b6",
    measurementId: "G-ENZCTYS488"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export them
export { auth, db };
