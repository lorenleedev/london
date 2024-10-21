import {ConfigProvider, Layout} from "antd";

const CustomLayout = ({children}) => {
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

export default CustomLayout as Layout;