// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDwea1y4SOfkMQA_gJ4pbLNeDF-pAQMq4U",
	authDomain: "sakhi-22b69.firebaseapp.com",
	projectId: "sakhi-22b69",
	storageBucket: "sakhi-22b69.appspot.com",
	messagingSenderId: "504113206260",
	appId: "1:504113206260:web:b45cd66d17298543889fa1"
  };

// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
