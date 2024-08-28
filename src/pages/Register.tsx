import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/auth.api";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/authSlice";

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [register, { isLoading }] = useRegisterMutation();

  const onFinish = async (values: any) => {
    try {
      const { data } = await register(values).unwrap();
      dispatch(setUser(data));
      message.success("Registration successful!");
      navigate("/user");
    } catch (error) {
      message.error(error?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      className="border shadow-lg"
      style={{ maxWidth: 600, margin: "25px auto", padding: "20px" }}
    >
      <h2>Register</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
