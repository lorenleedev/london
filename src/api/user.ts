import {getAuth, signInWithPopup, signOut as signOutFirebase, UserCredential} from "@firebase/auth";
import {auth, db, provider} from "@/thridparty/firebase";
import {User} from "@/store/user";
import {ref, set} from "firebase/database";

export const signIn = async (): Promise<UserCredential> => {
  try {
    return signInWithPopup(auth, provider);
  } catch (error) {
    console.error('로그인 중 오류 발생:', error);
    throw error;
  }
}

export const signOut = async (): Promise<void> => {
  try {
    const auth = getAuth();
    return signOutFirebase(auth);
  } catch (error) {
    console.error('로그아웃 중 오류 발생:', error);
    throw error;
  }
}

export const postUserInfo = (user: User) => {
  return set(ref(db, 'users/' + user.uid), {
    user_name: user.user_name,
    email: user.email,
    profile_picture: user.profile_picture,
  });
};
