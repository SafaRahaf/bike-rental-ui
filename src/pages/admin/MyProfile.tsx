import { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Avatar,
  Divider,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const sampleProfile = {
  name: "Admin User",
  email: "admin@example.com",
  role: "Administrator",
  profileImage: "https://www.example.com/profile.jpg",
};

const MyProfile = () => {
  const [profile, setProfile] = useState(sampleProfile);
  const [form] = Form.useForm();

  const handleProfileUpdate = (values: any) => {
    // Replace with actual API call
    console.log("Updated profile data:", values);
    message.success("Profile updated successfully!");
  };

  const handleImageUpload = (info: any) => {
    if (info.file.status === "done") {
      message.success(`Profile image uploaded successfully!`);
    } else if (info.file.status === "error") {
      message.error(`Profile image upload failed.`);
    }
  };

  return (
    <div className="p-6 flex justify-center">
      <Card
        title={<span className="text-2xl font-semibold">My Profile</span>}
        bordered={false}
        className="w-11/12"
      >
        <div className="flex items-center mb-4">
          <Avatar
            size={64}
            src={profile.profileImage}
            alt="Profile Image"
            style={{ marginRight: 16 }}
          />
          <Upload
            showUploadList={false}
            action="/upload"
            onChange={handleImageUpload}
          >
            <Button icon={<UploadOutlined />} className="font-semibold">
              Upload Profile Image
            </Button>
          </Upload>
        </div>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleProfileUpdate}
          initialValues={profile}
        >
          <Form.Item
            name="name"
            label={<span className="text-lg font-semibold">Name</span>}
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input className="text-lg font-semibold" />
          </Form.Item>
          <Form.Item
            name="email"
            label={<span className="text-lg font-semibold">Email</span>}
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input type="email" className="text-lg font-semibold" />
          </Form.Item>
          <Form.Item
            name="role"
            label={<span className="text-lg font-semibold">Role</span>}
            rules={[{ required: true, message: "Please enter your role!" }]}
          >
            <Input disabled className="text-lg font-semibold" />
          </Form.Item>
          <Form.Item>
            <Button
              className="bg-gradient-to-r from-cyan-300 to-pink-500 p-4 text-white font-semibold"
              htmlType="submit"
            >
              Update Profile
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <div className="text-center">
          <Button
            type="link"
            danger
            className="text-lg font-semibold text-pink-500"
            onClick={() => console.log("Logout")}
          >
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MyProfile;
