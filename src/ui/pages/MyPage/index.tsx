"use client"
import {Content} from "antd/es/layout/layout";
import {Flex, Tabs} from "antd";
import SectionAccount from "@/ui/pages/MyPage/SectionAccount";
import useGuardedPage from "@/hooks/useGuardedPage";

const MyPage = () => {
  useGuardedPage();

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