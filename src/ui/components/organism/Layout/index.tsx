import {ConfigProvider, Layout} from "antd";

const CustomLayout = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ConfigProvider theme={{
      components: {
        Layout: {
          headerBg: '#ffffff',
          bodyBg: '#ffffff'
        },
      },
    }}>
      <Layout>
        {children}
      </Layout>
    </ConfigProvider>
  )
}

export default CustomLayout;