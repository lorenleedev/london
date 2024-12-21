"use client"
// TODO: 진입 시점에 로그인 여부를 판단해야함.
import {Content} from "antd/es/layout/layout";
import {Flex, Tabs} from "antd";
import SectionAccount from "@/ui/pages/MyPage/SectionAccount";

const MyPage = () => {
  return (
    <Content>
      <Flex className={'container my-20'}>
        <Tabs
          defaultActiveKey="1"
          tabPosition={'left'}
          centered
          items={[{
            label: "내 계정",
            key: '1',
            children: <SectionAccount/>,
          }]}
        />
      </Flex>
    </Content>
  )
}

export default MyPage;