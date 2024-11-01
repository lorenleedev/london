import {getAuth, signInWithPopup, signOut as signOutFirebase} from "@firebase/auth";
import {auth, db, provider} from "@/thridparty/firebase";
import {User} from "@/store/user";
import {ref, set} from "firebase/database";

export const signIn = () => {
  return signInWithPopup(auth, provider);
}

export const signOut = () => {
  const auth = getAuth();
  return signOutFirebase(auth);
}

export const postUserInfo = (user: User) => {
  return set(ref(db, 'users/' + user.uid), {
    user_name: user.user_name,
    email: user.email,
    profile_picture: user.profile_picture,
  });
};
