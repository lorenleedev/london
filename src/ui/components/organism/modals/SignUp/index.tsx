import {Modal, Button, Flex, Image} from 'antd';
import {useState} from "react";
import styles from "@/ui/components/organism/modals/SignUp/SignUp.module.scss";
import useUserStore, {User} from "@/store/user";
import {postUserInfo, signIn} from "@/api/user";

interface SignUpProps {
  open: boolean;
  handleCancel: () => void;
}

const SignUp = ({
                  open,
                  handleCancel
                }: SignUpProps) => {
  const userStore = useUserStore();
  const [errorMessage, setErrorMessage] = useState('');

  const signInWithGoogle = async () => {
    try {
      const {user} = await signIn();
      const userInfo: User = {
        uid: user.uid,
        user_name: user.displayName || '사용자',
        email: user.email,
        profile_picture: user.photoURL
      };
      return userInfo;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        console.error('구글 로그인 중 signInWithGoogle 함수에서 에러 발생: ', error);
      }
    }
  };

  const handleClickSignIn = async () => {
    const {userInfo} = await signInWithGoogle;
    await postUserInfo(userInfo);
    userStore.setUser(userInfo);
    handleCancel();
  }

  return (
    <>
      <Modal
        title="회원가입/로그인"
        width={350}
        open={open}
        centered={true}
        onCancel={handleCancel}
        footer={
          <Button onClick={handleCancel}>
            닫기
          </Button>
        }>
        <Flex align={'center'} justify={'center'} className={'my-10'} vertical={true}>
          <p className={'text-center mb-4'}>구글 계정으로 간편하게 <br/>가입하거나 로그인할 수 있습니다.</p>
          <Button
            size={'large'}
            type={'default'}
            onClick={handleClickSignIn}
          >
            <Image src={"/images/thirdparty/google-icon.png"} preview={false} width={25}/>
            Google 계정으로 회원가입/로그인
          </Button>
        </Flex>
        <p className={styles.errorMessage}>{errorMessage}</p>
      </Modal>
    </>
  );
};

export default SignUp;