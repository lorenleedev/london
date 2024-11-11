"use client";
import {Header} from "antd/es/layout/layout";
import {Button, Flex, Image, Menu, Modal} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import {PoweroffOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import SignUp from "@/ui/components/organism/modals/SignUp";
import useToggle from "@/hooks/useToggle";
import useUserStore, {User} from "@/store/user";
import {postUserInfo, signOut} from "@/api/user";
import "@/thirdparty/firebase";
import dayjs from "dayjs";

const items = new Array(1).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `채용공고`,
}));

const Navigation = () => {
  const userStore = useUserStore();

  const {isToggleOn: isSignUpModalOn, handleToggle: handleSignUpToggle} = useToggle();
  const [isSignIn, setIsSignIn] = useState(false);
  const [modal, contextHolder] = Modal.useModal();

  useEffect(() => {
    if (userStore.user) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  }, [userStore.user]);

  const handleClickSignOut = () => {
    modal.confirm({
      title: '로그아웃',
      content: '로그아웃 하시겠습니까?',
      centered: true,
      okText: "아니오",
      cancelText: "네",
      onCancel: async () => {
        const user = {
          ...userStore.user as User,
          logged_out_at: dayjs().toISOString()
        }
        await Promise.all([postUserInfo(user), signOut()]);
        userStore.resetUser();
      }
    });
  }

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(5, 5, 5, 0.06)'
      }}>
      <Image src={'/images/logo/logo.png'} width={150} preview={false}></Image>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
          padding: '0 2.5rem'
        }}
      />
      {
        isSignIn ? (<>
          <Flex align={'center'} gap={6} style={{marginRight: '0.75rem'}}>
            <Image
              width={30}
              height={30}
              src={userStore.user?.profile_picture || '/images/dummy/anonymous.png'}
              preview={false}
              style={{borderRadius: '50%', background: '#e9eaeb', padding: '0.25rem'}}
            ></Image>
            반갑습니다, {userStore.user?.user_name}님!
          </Flex>
          <ButtonGroup>
            <Button>
              <SettingOutlined/>마이페이지</Button>
            <Button onClick={handleClickSignOut}>
              <PoweroffOutlined/>로그아웃
            </Button>
          </ButtonGroup>
        </>) : (<ButtonGroup>
          <Button onClick={handleSignUpToggle}>
            <UserOutlined/>
            회원가입/로그인
          </Button>
        </ButtonGroup>)
      }
      <SignUp
        open={isSignUpModalOn}
        handleCancel={handleSignUpToggle}
      />
      {contextHolder}
    </Header>
  )
}

export default Navigation;