import {ConfigProvider, Layout} from "antd";
import styles from '@/ui/components/atom/Layout/Layout.module.scss';

const backgroundColor = '#ffffff';

const CustomLayout = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ConfigProvider theme={{
      components: {
        Layout: {
          headerBg: backgroundColor,
          bodyBg: backgroundColor
        },
      },
    }}>
      <Layout className={styles.layout}>
        {children}
      </Layout>
    </ConfigProvider>
  )
}

export default CustomLayout;