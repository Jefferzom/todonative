import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDUX7dXBLDhSpC0GL1MGIs6NqOdfthKYKM",
  authDomain: "todolist-fd116.firebaseapp.com",
  databaseURL: "https://todolist-fd116-default-rtdb.firebaseio.com",
  projectId: "todolist-fd116",
  storageBucket: "todolist-fd116.appspot.com",
  messagingSenderId: "711741619914",
  appId: "1:711741619914:web:9446a84c6bdbd76510be33",
  measurementId: "G-41KF2XJZ3Q"
};

if(!firebase.apps.length) {
  // Teste de conhexão
  firebase.initializeApp(firebaseConfig);

}

export default firebase;