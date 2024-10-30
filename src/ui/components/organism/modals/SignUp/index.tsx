import {Modal, Button, Flex, Image} from 'antd';
import {useState} from "react";
import styles from "@/ui/components/organism/modals/SignUp/SignUp.module.scss";
import useUserStore, {User} from "@/store/user";
import {auth, db, provider} from "@/thridparty/firebase";
import {signInWithPopup} from "@firebase/auth";
import {ref, set} from "firebase/database";

interface SignUpProps {
  open: boolean;
  handleOk: () => void;
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
      const result = await signInWithPopup(auth, provider);
      const {uid, displayName: user_name = '', email = '', photoURL: profile_picture = ''} = result.user;
      const user: User = {uid, user_name, email, profile_picture};
      userStore.setUser(user);
      saveUserData(user);
      handleCancel();
    } catch (error) {
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    }
  };

  const saveUserData = (user: User) => {
    set(ref(db, 'users/' + user.uid), {
      user_name: user.user_name,
      email: user.email,
      profile_picture: user.profile_picture,
    });
  };

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
        <Flex align={'center'} justify={'center'} className={'my-12'}>
          <Button
            size={'large'}
            type={'default'}
            onClick={signInWithGoogle}
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