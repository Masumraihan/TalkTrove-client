import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
import { getRole } from "../Api/userApi";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [role, setRole] = useState(null);
  const [theme, setTheme] = useState("light");

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    if (user) {
      getRole(user.email).then((role) => {
        setRole(role);
      });
    }
  }, [user]);


  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_BASE_URL}/jwt`, {
            email: currentUser.email,
          })
          .then((data) => {
            localStorage.setItem("token", data.data);

            setLoader(false);
          });
      } else {
        localStorage.removeItem("token");
        setLoader(false);
      }

      return () => unsubscribe();
    });
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loader,
    setLoader,
    updateUserProfile,
    googleSignIn,
    role,
    theme,
    setTheme
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
