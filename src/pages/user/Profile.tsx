import React, { useState } from "react";
import { Card, Col, Row, Button, Form, Input } from "antd";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const handleEdit = () => {
    setIsEditing(true);
    form.setFieldsValue({
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: "123 Main St, Anytown, USA",
    });
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log("Saved values:", values);
      setIsEditing(false);
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Row gutter={[16, 16]} justify="center" className="p-4">
      <Col xs={24} md={12}>
        <Card className="shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            My Profile
          </h2>
          {!isEditing ? (
            <div>
              <div className="text-center space-y-6">
                <img
                  src="path-to-profile-image.jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <p className="text-xl font-semibold">
                  <span className="text-gray-800">John Doe</span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Email:</strong>{" "}
                  <span className="text-gray-800">john.doe@example.com</span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Phone:</strong>{" "}
                  <span className="text-gray-800">+1234567890</span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Address:</strong>{" "}
                  <span className="text-gray-800">
                    123 Main St, Anytown, USA
                  </span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Bikes Rented:</strong>{" "}
                  <span className="text-gray-800">5</span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Total Money Spent:</strong>{" "}
                  <span className="text-gray-800">$450</span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Current Bike:</strong>{" "}
                  <span className="text-gray-800">Mountain Bike</span>
                </p>

                <Button
                  type="primary"
                  onClick={handleEdit}
                  className="bg-gradient-to-r from-pink-500 to-cyan-300 text-white px-6 py-2 rounded-lg"
                >
                  Edit Profile
                </Button>
              </div>
            </div>
          ) : (
            <Form form={form} layout="vertical" onFinish={handleSave}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input placeholder="Enter your phone number" />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input placeholder="Enter your address" />
              </Form.Item>
              <Form.Item label="Profile Image" name="profileImage">
                <Input placeholder="Upload your profile image" />
              </Form.Item>
              <div className="flex justify-between">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-gradient-to-r from-pink-500 to-cyan-300 text-white px-6 py-2 rounded-lg"
                >
                  Save Changes
                </Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </div>
            </Form>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
