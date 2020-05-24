import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDKcPKqLk9bpK-7HzM7MHpOPvK8lc-Sd3U",
    authDomain: "announce-iiit-7537d.firebaseapp.com",
    databaseURL: "https://announce-iiit-7537d.firebaseio.com",
    projectId: "announce-iiit-7537d",
    storageBucket: "announce-iiit-7537d.appspot.com",
    messagingSenderId: "1089640543852",
    appId: "1:1089640543852:web:93fae8cc302943a5aa8a49",
    measurementId: "G-V3GZGV7N6F"
};

firebase.initializeApp(firebaseConfig);

export default firebase;