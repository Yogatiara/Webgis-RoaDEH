
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwRUwSDUuKdTB66TlJx5Ciz_0Z5PjIZec",
  authDomain: "roadeh-f6915.firebaseapp.com",
  projectId: "roadeh-f6915",
  storageBucket: "roadeh-f6915.appspot.com",
  messagingSenderId: "1056250225571",
  appId: "1:1056250225571:web:31be3426b3bceae48a3016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);