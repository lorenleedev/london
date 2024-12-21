import Section from "@/ui/components/atom/Section";
import {Button, Descriptions, DescriptionsProps, Image, Modal, Popover} from "antd";
import useUserStore from "@/store/user";
import {deleteUser} from "@/api/user";
import {useRouter} from "next/navigation";

const SectionAccount = () => {
  const userStore = useUserStore();
  const router = useRouter();
  const [modal, contextHolder] = Modal.useModal();

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '프로필 이미지',
      span: 3,
      children: (
        <Image
          width={30}
          height={30}
          src={userStore.user?.profile_picture || '/images/dummy/anonymous.png'}
          preview={false}
          style={{borderRadius: '50%', background: '#e9eaeb', padding: '0.25rem'}}
        ></Image>
      ),
    },
    {
      key: '2',
      span: 3,
      label: '이름',
      children: userStore.user?.user_name,
    },
    {
      key: '3',
      span: 3,
      label: '계정',
      children: userStore.user?.email,
    },
    {
      key: '4',
      span: 3,
      label: '탈퇴',
      children: (
        <Popover content={<p>{userStore.user?.user_name}님이 지금가지 쌓아온 기록이 초기화돼요 🥹</p>} trigger="hover">
          <Button
            variant="dashed"
            color="default"
            size={"small"}
            onClick={handleClickWithdraw}
          >탈퇴하기</Button>
        </Popover>
      )
    },
  ];

  function handleClickWithdraw()  {
    modal.confirm({
      title: '회원탈퇴',
      content: '회원탈퇴 하시겠습니까?',
      centered: true,
      okText: "아니오",
      cancelText: "네",
      onCancel: async () => {
        try {
          await deleteUser();
          userStore.resetUser();
          router.push('/');
        } catch (error) {
          console.error('회원탈퇴 실패: ', error);
        }
      }
    });
  }

  return (
    <Section style={{margin: 0}}>
      <Descriptions title="내 계정" items={items} bordered></Descriptions>
      {contextHolder}
    </Section>
  )
}

export default SectionAccount;