import { useState, useCallback, useEffect } from 'react';
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addUserDetails, getUserDetails } from './firestore';

/**
 * this is a custom hook for providing access to firebase auth services throughout the app
 */
const useAuth = () => {
  const [userData, setUserData] = useState(auth.currentUser);
  const [userInfo, setUserInfo] = useState({
    name: ''
  });

  // updates the user information if changes happen in auth state
  onAuthStateChanged(auth, (user) => {
    setUserData(user);
  });

  // this function fetches the user's name from firestore based on current logged in user
  const fetchUserDetails = async () => {
    try {
      if (!!userData && !!userData.email) {
        const details = await getUserDetails(userData.email);
        setUserInfo(details);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // if the logged in user's data changes, this hook refetches the user details from firestore
  useEffect(() => {
    fetchUserDetails();
  }, [userData])

  /**
   * this function takes the user's email and password
   * it logs the user in if the data is valid as per firebase
   */
  const loginUser = useCallback(async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    setUserData(userCredential.user);

    const userDetails = await getUserDetails(email);
    setUserInfo({
      name: userDetails.name
    });
  }, [setUserData, setUserInfo]);

  /**
   * this function takes the user's name, email and password
   * it creates an account for the user, adds the user's name to firestore if the data is valid
   */
  const createUser = useCallback(async (name: string, email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    if (userCredential.user.email) {
      await addUserDetails(userCredential.user.email, name)
      setUserData(userCredential.user);
      setUserInfo({
        name: name
      });
    } else {
      throw new Error();
    }
  }, [setUserData, setUserInfo]);

  // this method logs the user out and ends the session on firebase
  const logoutUser = async () => {
    await signOut(auth);
  };

  return {
    userData,
    userInfo,
    loginUser,
    logoutUser,
    createUser,
    isUserLoggedIn: !!userData,
  }
}

export default useAuth;
