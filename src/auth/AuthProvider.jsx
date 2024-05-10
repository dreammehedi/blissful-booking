import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../firebase/firebase.init";

// create a auth context
export const AuthContext = createContext();

function AuthProvider({ children }) {
  // firebase authentication all functions

  // create new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   login with google
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // update user profile
  const updateUserProfile = (userName, profilePhoto) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: profilePhoto,
    });
  };

  //   all function provide to auth context value
  const authInfo = {
    createNewUser,
    loginWithEmailAndPassword,
    loginWithGoogle,
    updateUserProfile,
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
