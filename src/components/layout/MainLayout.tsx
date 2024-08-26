import { Outlet } from "react-router-dom";
import { Button, Layout } from "antd";
import AppHeader from "./Header";
import Footer from "./Footer";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="min-h-screen flex flex-col">
      <AppHeader />
      <Content className="flex-grow">
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
