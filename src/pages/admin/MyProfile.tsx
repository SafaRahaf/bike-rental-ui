import { useState } from "react";
import { Card, Col, Row, Button, Form, Input, message, Spin } from "antd";
import {
  useGetProfileInfoQuery,
  useUpdateProfileInfoMutation,
} from "../../redux/features/auth.api";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const {
    data: profileData,
    isLoading,
    error,
  } = useGetProfileInfoQuery(undefined);
  const [updateProfileInfo, { isLoading: isUpdating }] =
    useUpdateProfileInfoMutation();

  if (isLoading)
    return <Spin size="large" className="flex justify-center mt-20" />;
  if (error)
    return (
      <p className="text-center text-red-500">
        Error loading profile information.
      </p>
    );

  const { name, email, phone, address, role, createdAt, updatedAt } =
    profileData.data;

  const handleEdit = () => {
    setIsEditing(true);
    form.setFieldsValue({ name, email, phone, address });
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      await updateProfileInfo(values).unwrap();
      message.success("Profile updated successfully!");
      setIsEditing(false);
      window.location.reload();
    } catch (err) {
      message.error("Failed to update profile. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Row justify="center" className="p-4">
      <Col xs={24} md={12}>
        <Card className="shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-6 text-center text-[#72445e]">
            My Profile
          </h2>
          {!isEditing ? (
            <div className="space-y-4">
              <div className="text-center space-y-4">
                <img
                  src="path-to-profile-image.jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <p className="text-2xl font-semibold">{name}</p>
                <p className="text-lg">
                  <strong className="text-gray-600">Email:</strong> {email}
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Phone:</strong> {phone}
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Address:</strong> {address}
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Role:</strong> {role}
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Joined:</strong>{" "}
                  {new Date(createdAt).toLocaleDateString()}
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Last Updated:</strong>{" "}
                  {new Date(updatedAt).toLocaleDateString()}
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
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSave}
              className="space-y-4"
            >
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
              <div className="flex justify-end space-x-4">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-gradient-to-r from-pink-500 to-cyan-300 text-white px-6 py-2 rounded-lg"
                  loading={isUpdating}
                >
                  Save Changes
                </Button>
                <Button onClick={handleCancel} className="px-6 py-2 rounded-lg">
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
