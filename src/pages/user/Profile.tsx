import { useState } from "react";
import { Card, Col, Row, Button, Form, Input, message } from "antd";
import {
  useGetProfileInfoQuery,
  useUpdateProfileInfoMutation,
} from "../../redux/features/auth.api";
import Loading from "../../components/layout/Loading";

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

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading profile information.</p>;

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
    <Row gutter={[16, 16]} justify="center" className="p-4">
      <Col xs={24} md={12}>
        <Card className="shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-[#72445e]">
            My Profile
          </h2>
          {!isEditing ? (
            <div>
              <div className="text-center space-y-6">
                <div className="w-32 h-32 rounded-full mx-auto bg-gray-400"></div>
                {/* <img
                  src="path-to-profile-image.jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto"
                /> */}
                <p className="text-xl font-semibold">
                  <span className="text-gray-800">{name}</span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Email:</strong>{" "}
                  <span className="text-gray-800">{email}</span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Phone:</strong>{" "}
                  <span className="text-gray-800">{phone}</span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Address:</strong>{" "}
                  <span className="text-gray-800">{address}</span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Role:</strong>{" "}
                  <span className="text-gray-800">{role}</span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Joined:</strong>{" "}
                  <span className="text-gray-800">
                    {new Date(createdAt).toLocaleDateString()}
                  </span>
                </p>
                <p className="text-lg">
                  <strong className="text-gray-600">Last Updated:</strong>{" "}
                  <span className="text-gray-800">
                    {new Date(updatedAt).toLocaleDateString()}
                  </span>
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
                  loading={isUpdating}
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
