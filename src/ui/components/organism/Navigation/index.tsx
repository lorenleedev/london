import {Header} from "antd/es/layout/layout";
import {Button, Flex, Image, Menu} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import {PoweroffOutlined, SettingOutlined} from "@ant-design/icons";

{/*TODO 메뉴 기획에 따라 수정 */
}
const items = new Array(1).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `홈`,
}));

const Navigation = () => {
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
          padding: '0 40px'
        }}
      />
      {/*TODO 비로그인 상태에서 노출 */}
      {/*<ButtonGroup>*/}
      {/*  <Button><UserOutlined/>회원가입/로그인</Button>*/}
      {/*</ButtonGroup>*/}
      {/*TODO 로그인 상태에서 노출 */}
      <Flex align={'center'} gap={6} style={{marginRight: '12px'}}>
        <Image width={30} height={30} src={'/images/dummy/anonymous.png'} preview={false} style={{borderRadius: '50%', background: '#e9eaeb', padding: '4px'}}></Image>
        반갑습니다, OOO님!
      </Flex>
      <ButtonGroup>
        <Button>
          <SettingOutlined/>마이페이지</Button>
        <Button><PoweroffOutlined/>로그아웃</Button>
      </ButtonGroup>
    </Header>
  )
}

export default Navigation;