import { Card, Col, Row, Statistic, List, Typography } from "antd";
import {
  UserOutlined,
  DollarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import CouponManagement from "./CouponManagement";

const { Title } = Typography;

const Dashboard = () => {
  const totalRentals = 120;
  const totalBikes = 30;
  const totalUsers = 45;
  const totalRevenue = 3200;

  const recentActivities = [
    { id: 1, description: "Rental booked for Bike A", date: "2024-08-24" },
    { id: 2, description: "Bike B returned", date: "2024-08-23" },
    { id: 3, description: "New user registered", date: "2024-08-22" },
  ];

  return (
    <div>
      <div className="p-6">
        <Row gutter={16} className="mb-6">
          <Col span={6}>
            <Card className="bg-gradient-to-r to-pink-100 shadow-md from-cyan-100">
              <Statistic
                title="Total Rentals"
                value={totalRentals}
                prefix={<ClockCircleOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="bg-gradient-to-r from-pink-100 shadow-md to-cyan-100">
              <Statistic
                title="Total Bikes"
                value={totalBikes}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="bg-gradient-to-r to-pink-100 shadow-md from-cyan-100">
              <Statistic
                title="Total Users"
                value={totalUsers}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="bg-gradient-to-r from-pink-100 shadow-md to-cyan-100">
              <Statistic
                title="Total Revenue"
                value={`$${totalRevenue}`}
                prefix={<DollarOutlined />}
              />
            </Card>
          </Col>
        </Row>

        <Title level={4}>Recent Activities</Title>
        <List
          className="shadow-md"
          bordered
          dataSource={recentActivities}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Typography.Text>{item.description}</Typography.Text>
              <div
                style={{
                  marginLeft: "auto",
                }}
              >
                {item.date}
              </div>
            </List.Item>
          )}
        />
      </div>
      <Title className="text-center mt-5" level={4}>
        <span className="mt-3 font-bold text-2xl text-[#72445e]">
          Coupon Management
        </span>
      </Title>
      <CouponManagement />
    </div>
  );
};

export default Dashboard;
