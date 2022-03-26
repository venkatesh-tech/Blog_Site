const firebaseConfig = {
  apiKey: "AIzaSyCM1-Gbba8_U3Axm-zgd6O70x21y7hN5WY",
  authDomain: "blogging-website-81cf0.firebaseapp.com",
  projectId: "blogging-website-81cf0",
  storageBucket: "blogging-website-81cf0.appspot.com",
  messagingSenderId: "963445276398",
  appId: "1:963445276398:web:1a0ac30c36cc5481af3dff",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
