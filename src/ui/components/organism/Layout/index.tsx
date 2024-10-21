import {ConfigProvider, Layout} from "antd";

const CustomLayout = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ConfigProvider theme={{
      components: {
        Layout: {
          headerBg: '#ffffff'
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