import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// From Karl's versiion of Instagram //

const firebaseConfig = {
  apiKey: "AIzaSyBJOCz9pRK5vw2c_jiuVpqh-r6FoZYtIpA",
  authDomain: "instagram-yt-aa6cb.firebaseapp.com",
  projectId: "instagram-yt-aa6cb",
  storageBucket: "instagram-yt-aa6cb.appspot.com",
  messagingSenderId: "718094226965",
  appId: "1:718094226965:web:cacd981beed606d820201c"
};


// From SimCoder's version of Instagram. The mobile app version. //

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiKuH5gUJl1f7UAZFv5m71Imf0Yun9w48",
  authDomain: "instagram-dev-cfe42.firebaseapp.com",
  projectId: "instagram-dev-cfe42",
  storageBucket: "instagram-dev-cfe42.appspot.com",
  messagingSenderId: "792816462994",
  appId: "1:792816462994:web:c9563ca763349e5c5c4a4b",
  measurementId: "G-LH4DQPEW49"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
