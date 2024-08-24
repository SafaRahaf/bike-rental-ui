import { Card, Col, Row } from "antd";
import {
  CheckCircleOutlined,
  StarOutlined,
  SafetyCertificateOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const reasons = [
  {
    id: 1,
    icon: (
      <CheckCircleOutlined style={{ fontSize: "2rem", color: "#4CAF50" }} />
    ),
    title: "Top Quality Bikes",
    description:
      "We offer a range of high-quality bikes to ensure a smooth and enjoyable ride.",
  },
  {
    id: 2,
    icon: <StarOutlined style={{ fontSize: "2rem", color: "#FFC107" }} />,
    title: "Excellent Service",
    description:
      "Our team is dedicated to providing the best customer service experience.",
  },
  {
    id: 3,
    icon: (
      <SafetyCertificateOutlined
        style={{ fontSize: "2rem", color: "#2196F3" }}
      />
    ),
    title: "Safety First",
    description:
      "All our bikes are regularly checked and maintained to ensure your safety.",
  },
  {
    id: 4,
    icon: (
      <UsergroupAddOutlined style={{ fontSize: "2rem", color: "#FF5722" }} />
    ),
    title: "Affordable Rates",
    description:
      "We offer competitive pricing to ensure you get the best value for your money.",
  },
];

const WhyChooseUsSecton = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 ">Why Choose Us?</h2>
        <Row gutter={16}>
          {reasons.map((reason) => (
            <Col xs={24} sm={12} md={6} key={reason.id} className="mb-4">
              <Card
                className="flex flex-col items-center text-center p-6 border-2 border-gray-200 rounded-lg shadow-lg"
                cover={reason.icon}
              >
                <Card.Meta
                  title={
                    <h3 className="text-xl font-semibold text-gray-800">
                      {reason.title}
                    </h3>
                  }
                  description={
                    <p className="text-gray-600">{reason.description}</p>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WhyChooseUsSecton;
