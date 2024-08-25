import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
    message.success("Login successful!");
    navigate("/user");
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
