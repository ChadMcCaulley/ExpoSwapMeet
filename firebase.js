const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain:  `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: "https://project-id.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id"
}; 