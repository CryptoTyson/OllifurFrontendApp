import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCUqp1YM8cSGeTX5FABKmq9ib2G6rWL4a4',
  authDomain: 'ollifur-18f0e.firebaseapp.com',
  projectId: 'ollifur-18f0e',
  storageBucket: 'ollifur-18f0e.appspot.com',
  messagingSenderId: '187544498840',
  appId: '1:187544498840:web:04ae15be688e1c542516ed',
  measurementId: 'G-57LLSY1N98',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
