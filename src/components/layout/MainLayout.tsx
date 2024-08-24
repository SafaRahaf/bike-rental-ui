import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "./Header";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="h-full" style={{ height: "100%" }}>
      <AppHeader />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
