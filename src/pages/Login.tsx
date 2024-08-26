import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth.api";
import { setUser } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const onFinish = async (values: any) => {
    try {
      const response = await login(values).unwrap();
      message.success("Login successful!");

      localStorage.setItem("token", response.token);

      dispatch(
        setUser({
          user: response.data,
          token: response.token,
        })
      );

      if (response.data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user");
      }
    } catch (error: any) {
      message.error(error?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div
      className="border shadow-lg"
      style={{ maxWidth: 600, margin: "25px auto", padding: "20px" }}
    >
      <h2>Login</h2>
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
        <div className="flex justify-between">
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Login
            </Button>
          </Form.Item>
          <Link to="/register">
            <Button className="bg-[#72445e] text-white">Register</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
