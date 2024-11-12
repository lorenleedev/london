import {signInWithPopup, signOut as signOutFirebase, UserCredential} from "@firebase/auth";
import {auth, db, provider} from "@/thirdparty/firebase";
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
    return signOutFirebase(auth);
  } catch (error) {
    console.error('로그아웃 중 오류 발생:', error);
    throw error;
  }
}

export const postUserInfo = (user: User) => {
  if (!user?.uid || !user?.email) {
    throw new Error('필수 사용자 정보가 누락되었습니다.');
  }
  // 어떤 특수 문자나 공백을 포함하여 URL로 사용시 안전하게 전송할 수 있도록 변환
  const sanitizedUid = encodeURIComponent(user.uid);

  return set(ref(db, 'users/' + sanitizedUid), {
    ...user,
    profile_picture: user.profile_picture,
    updated_at: new Date().toISOString(),
  });
};
