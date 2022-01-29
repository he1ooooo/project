import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDX20fEJ7ezkcWtyQ1BaiD-KaE5OfkIbOc",
  authDomain: "login-ee382.firebaseapp.com",
  projectId: "login-ee382",
  storageBucket: "login-ee382.appspot.com",
  messagingSenderId: "786868477052",
  appId: "1:786868477052:web:4375db8d8cc30e2a373df9",
  measurementId: "G-J0NQC7N4X1"
};
export const useFirebase = () => {
  const [state, setState] = useState(null);
  let app;
  useEffect(() => {
    if (!firebase.apps.length) app = firebase.initializeApp(firebaseConfig);
    let firestore = firebase.firestore();
    let auth = firebase.auth();
    setState({ firestore, app, auth });
  }, []);

  return {
    ...state,
  };
};
// export const useCollection = (path) => {
//   const { firestore } = useFirebase();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     if (!firestore) return;
//     let unSubscribe = firestore.collection(path).onSnapshot((query) => {
//       setData(query.docs.map((doc) => doc.data()));
//     });

//     return () => unSubscribe(); 
//   }, [firestore]);

//   const createDocument = async (auth) => {
//     let doc = await firestore.collection(path).add(data);
//     return doc;
//   }

//   return {
//     data,
//     createDocument
//   };
// };

// export const useDoc = async (path) => {
//   const { firestore } = useFirebase();
//   const [data, setData] = useState([]);
//   const cityRef = firestore.collection('cities').doc('BJ');
//   // const updateDoc = await cityRef.update({
//   //   capital: FieldValue.delete()
//   // });
//   return {
//     data,
//     deleteDoc,
//     updateDoc,
//   }
// }