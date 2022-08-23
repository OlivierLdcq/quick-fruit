// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  WriteBatch,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "../context/user.context";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTeo4Qeg6hWG5RXBPnXGhmHlA59z3eO1Y",
  authDomain: "quickfruit.firebaseapp.com",
  projectId: "quickfruit",
  storageBucket: "quickfruit.appspot.com",
  messagingSenderId: "647749436273",
  appId: "1:647749436273:web:83516c9d2f368d659e6cd0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const createUserInDataBase = async (user, otherInfos) => {
  const { displayName, email, uid } = user;
  const createdAt = new Date();
  const userDocRef = doc(db, "users", uid);
  const userSnapShot = await getDoc(userDocRef);
  !userSnapShot.exists() &&
    setDoc(userDocRef, { displayName, email, createdAt, ...otherInfos });
};

export const handleGoogleSignIn = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const { user } = result;
  return user;
};

export const createNewUserFromSignup = async (signupForm) => {
  const { email, password, passwordConf } = signupForm;
  if (password === passwordConf) {
    try {
      const registeredUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return registeredUser;
    } catch (err) {
      console.log(err.message, "sorry impossible to create this user");
    }
  } else {
    console.log("Oops, passwords must match !");
  }
};

export const handleSignupProcess = async (signupForm) => {
  const registeredUser = await createNewUserFromSignup(signupForm);
  if (registeredUser) {
    await createUserInDataBase(registeredUser.user, {
      displayName: signupForm.displayName.toLowerCase(),
    });
  }
  return registeredUser;
};

export const handleAuthStateChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const handleSignOut = async () => {
  console.log("signout");
  return await signOut(auth);
};

export const signInWithEmailAndPasswordHandler = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const sendMyProductsListDataIntoFireBase = async (
  collectionKey,
  productsListData
) => {
  console.log(productsListData);
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  productsListData.forEach((category) => {
    console.log(category);
    const docRef = doc(db, collectionKey, category.category);

    console.log(docRef);
    batch.set(docRef, category);
  });
  batch.commit();
};

export const getProductsListFromDataBase = async (
  productsList,
  setProductsList
) => {
  const marketRef = collection(db, "market");
  console.log(marketRef);
  const q = query(marketRef);
  const querySnapshot = await getDocs(q);
  console.log(q);
  console.log(querySnapshot);

  const newList = querySnapshot.docs.reduce((acc, item) => {
    const { category, itemsInCategory } = item.data();
    acc[category] = itemsInCategory;
    return acc;
  }, {});
  setProductsList(newList);
};
