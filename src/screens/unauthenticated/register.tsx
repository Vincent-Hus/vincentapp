import { Form, Input, Button } from "antd";
import { useAuth } from "context/auth_context";

export const RegisterScreen = () => {
  const { register } = useAuth();

  const handelSubmit = (value: {
    user_id: string;
    password: string;
    Email: string;
  }) => {
    register(value);
  };

  return (
    <Form onFinish={handelSubmit}>
      <Form.Item
        name="user_id"
        rules={[{ required: true, message: "請輸入帳號" }]}
        wrapperCol={{ span: 8, offset: 8 }}
      >
        <Input id={"user_id"} type="text" placeholder="帳號" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "請輸入密碼" }]}
        wrapperCol={{ span: 8, offset: 8 }}
      >
        <Input.Password id={"password"} type="password" placeholder="密碼" />
      </Form.Item>
      <Form.Item name="Email" wrapperCol={{ span: 8, offset: 8 }}>
        <Input id={"Email"} type="email" placeholder="電子郵件"></Input>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 0 }}>
        <Button shape="round" size="large" htmlType="submit" type="primary">
          註冊
        </Button>
      </Form.Item>
    </Form>
  );
};
