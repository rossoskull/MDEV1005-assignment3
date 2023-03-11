import { store } from "./firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

// this function adds details of a new user in firestore by using the user's name and email
export const addUserDetails = (email: string, name: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const customDoc = doc(store, 'users', email);

      await setDoc(customDoc, {
        name
      });

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

// this function fetches a user's details based on the user's email ID
export const getUserDetails = async (email: string): Promise<{
  name: string;
}> => {
  const customDoc = doc(store, 'users', email);

  const docRef = await getDoc(customDoc);

  const docData = docRef.data();

  if (docData !== undefined) return {
    name: docData.name
  };

  throw new Error('No such user exists');
}

// this function fetches all the users that are added to the firestore (registered on the application)
export const getAllUsers = (): Promise<{
  key: string;
  email: string;
  name: string;
}[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const customDoc = collection(store, 'users');

      const docsRef = await getDocs(customDoc);

      resolve(docsRef.docs.map((d) => ({
        key: d.id,
        email: d.id,
        name: d.data().name
      })));
    } catch (error) {
      reject(error);
    }
  });
}
