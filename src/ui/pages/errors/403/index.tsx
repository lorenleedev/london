"use client"
import {Button, Result} from "antd";
import useAuth from "@/hooks/useAuth";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const ForbiddenPage = () => {
  const {isSignIn} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignIn) {
      return router.back();
    }
  }, [isSignIn]);

  return (
    <Result
      status="403"
      title="403"
      subTitle="로그인된 회원만 볼 수 있는 페이지에요!"
      extra={<Button type="primary" href={'/'}>메인으로 돌아가기</Button>}
    />
  );
};

export default ForbiddenPage;
