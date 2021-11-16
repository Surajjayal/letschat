import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDQQ0K7duuyFNbm71Nvkl7j8hArVaXZ3-0",
    authDomain: "webapp-e10ed.firebaseapp.com",
    databaseURL: "https://webapp-e10ed.firebaseio.com",
    projectId: "webapp-e10ed",
    storageBucket: "webapp-e10ed.appspot.com",
    messagingSenderId: "944439383871",
    appId: "1:944439383871:web:6ba2553bb55b3399fda58a",
    measurementId: "G-QSRM0SXLBJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;