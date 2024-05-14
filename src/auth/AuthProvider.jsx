import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

// create a auth context
export const AuthContext = createContext();

function AuthProvider({ children }) {
  // firebase authentication all functions

  // set user
  const [user, setUser] = useState(null);

  // handle user redirect
  const [userLoading, setUserLoading] = useState(true);

  // create new user
  const createNewUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const loginWithEmailAndPassword = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const loginWithGoogle = () => {
    setUserLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //   logout user
  const userSignOut = () => {
    setUserLoading(true);
    return auth.signOut();
  };
  // update user profile
  const updateUserProfile = (userName, profilePhoto) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: profilePhoto,
    });
  };

  // user state set in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      if (currentUser) {
        setUser(currentUser);
        setUserLoading(false);

        // get a token from server
        axios
          .post("https://blissful-bookings.vercel.app/signin", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setUser(null);
        setUserLoading(false);

        // user sign out cookie clear
        axios
          .post("https://blissful-bookings.vercel.app/signout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
    return () => unsubscribe;
  }, [user?.email]);

  // all function provide to auth context value
  const authInfo = {
    user,
    userLoading,
    createNewUser,
    loginWithEmailAndPassword,
    loginWithGoogle,
    updateUserProfile,
    userSignOut,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
