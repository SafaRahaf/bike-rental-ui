import { Card, Col, Row } from "antd";
import {
  TagOutlined,
  PercentageOutlined,
  GiftOutlined,
  StarOutlined,
} from "@ant-design/icons";

const coupons = [
  {
    id: 1,
    icon: <TagOutlined style={{ fontSize: "2.5rem", color: "#FF5722" }} />,
    title: "10% Off on First Rental",
    description: "Get 10% off your first bike rental. Use code: FIRST10",
    code: "FIRST10",
  },
  {
    id: 2,
    icon: (
      <PercentageOutlined style={{ fontSize: "2.5rem", color: "#FFC107" }} />
    ),
    title: "15% Off on Weekends",
    description:
      "Enjoy 15% off on all rentals during weekends. No code needed!",
    code: "",
  },
  {
    id: 3,
    icon: <GiftOutlined style={{ fontSize: "2.5rem", color: "#4CAF50" }} />,
    title: "Free Helmet with Rental",
    description: "Rent any bike and get a free helmet. Limited time offer!",
    code: "",
  },
  {
    id: 4,
    icon: <StarOutlined style={{ fontSize: "2.5rem", color: "#2196F3" }} />,
    title: "Loyalty Rewards",
    description: "Earn points with every rental. Redeem points for discounts!",
    code: "",
  },
];

const CouponsAndDiscountsSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-pink-500 to-cyan-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Exclusive Coupons & Discounts
        </h2>
        <Row gutter={[16, 16]}>
          {coupons.map((coupon) => (
            <Col
              xs={24}
              sm={12}
              md={6}
              key={coupon.id}
              className="flex justify-center"
            >
              <Card
                className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg flex flex-col items-center"
                cover={coupon.icon}
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {coupon.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{coupon.description}</p>
                  {coupon.code && (
                    <p className="font-semibold text-blue-600">
                      Use Code:{" "}
                      <span className="bg-blue-100 px-2 py-1 rounded">
                        {coupon.code}
                      </span>
                    </p>
                  )}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CouponsAndDiscountsSection;
