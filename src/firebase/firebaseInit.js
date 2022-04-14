import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr5rLiDCXqsald8LmwxySAxuG9Q8HZFWE",
  authDomain: "fireblog-fa8e4.firebaseapp.com",
  projectId: "fireblog-fa8e4",
  storageBucket: "fireblog-fa8e4.appspot.com",
  messagingSenderId: "787144181490",
  appId: "1:787144181490:web:d251a2c4cba0264644f26b",
  measurementId: "G-BN5ZWRYP3W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };

export default firebase.firestore(firebaseApp);
