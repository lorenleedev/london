import {useEffect} from 'react';
import {useRouter} from "next/navigation";
import 'firebase/auth';
import {auth} from "@/thirdparty/firebase";

const useGuardedPage = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // 로그인되지 않은 경우 403페이지로 리디렉션
        router.push('/403');
      }
    });

    return () => unsubscribe();
  }, [router]);
};

export default useGuardedPage;
