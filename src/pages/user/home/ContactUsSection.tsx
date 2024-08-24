import { Form, Input, Button, Row, Col, Typography } from "antd";
import { MailOutlined, PhoneOutlined, ManOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ContactUsSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Title level={2} className="text-center mb-12">
          Contact Us
        </Title>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <Title level={4} className="mb-3">
                Get in Touch
              </Title>
              <Form
                layout="vertical"
                onFinish={(values) => console.log(values)}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input a valid email!",
                    },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="Your Message" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    className="bg-gradient-to-r from-pink-800 to-cyan-900"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="p-8 bg-white rounded-lg shadow-lg bg-[#72445e] text-white">
              <Title level={4} className="mb-4" style={{ color: "white" }}>
                Our Contact Information
              </Title>
              <div className="flex items-center mb-4 ">
                <PhoneOutlined style={{ fontSize: "1.5rem", color: "white" }} />
                <Paragraph className="ml-4 mb-0 text-white ">
                  +1 (234) 567-890
                </Paragraph>
              </div>
              <div className="flex items-center mb-4 ">
                <MailOutlined style={{ fontSize: "1.5rem", color: "white" }} />
                <Paragraph className="ml-4 mb-0 text-white">
                  info@bikerental.com
                </Paragraph>
              </div>
              <div className="flex items-center mb-4 ">
                <ManOutlined style={{ fontSize: "1.5rem", color: "white" }} />
                <Paragraph className="ml-4 mb-0 text-white">
                  123 Bike Lane, Cyclist City, CA 90210
                </Paragraph>
              </div>

              <div className="flex items-center mb-4 text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                rem perspiciatis architecto ad, porro aperiam at unde ipsam
                sapiente? Molestiae, ratione quaerat ea odio fugit laborum sequi
              </div>
              <div className="flex items-center mb-4 text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                rem perspiciatis architecto ad, porro aperiam at unde ipsam
                sapiente? Molestiae, ratione quaerat ea odio fugit laborum sequi
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUsSection;
