import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCn9KEQzhsTz5gQv4cvKsGFN872aDbcIfU",
  authDomain: "tenedores-b4a3f.firebaseapp.com",
  databaseURL: "https://tenedores-b4a3f.firebaseio.com",
  projectId: "tenedores-b4a3f",
  storageBucket: "tenedores-b4a3f.appspot.com",
  messagingSenderId: "41128987779",
  appId: "1:41128987779:web:f72fa54f683c39984d9fb6"
};

export const firebaseapp = firebase.initializeApp(firebaseConfig);
