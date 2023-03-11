import { useState, useCallback, useEffect } from 'react';
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addUserDetails, getUserDetails } from './firestore';

const useAuth = () => {
  const [userData, setUserData] = useState(auth.currentUser);
  const [userInfo, setUserInfo] = useState({
    name: ''
  });

  onAuthStateChanged(auth, (user) => {
    setUserData(user);
  });

  const fetchUserDetails = async () => {
    try {
      if (!!userData && !!userData.email) {
        const details = await getUserDetails(userData.email);
        setUserInfo(details);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, [userData])

  // login
  const loginUser = useCallback(async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    setUserData(userCredential.user);

    const userDetails = await getUserDetails(email);
    setUserInfo({
      name: userDetails.name
    });
  }, [setUserData, setUserInfo]);

  // register
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

  // sign out
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
