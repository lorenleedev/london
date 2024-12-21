import {useEffect, useState} from "react";
import {auth} from "@/thirdparty/firebase";
import useUserStore, {User} from "@/store/user";

const useAuth = () => {
  const userStore = useUserStore();
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignIn(true);
        const userInfo: User = {
          uid: user.uid,
          user_name: user.displayName || '사용자',
          email: user.email,
          profile_picture: user.photoURL
        };
        userStore.setUser(userInfo);
      } else {
        setIsSignIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    isSignIn
  }
}

export default useAuth;