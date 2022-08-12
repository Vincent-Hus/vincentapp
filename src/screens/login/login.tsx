import { Form, Input, Button } from "antd";
import { useAuth } from "context/auth_context";

export const LoginScreen = () => {
  const { login, user } = useAuth();

  const handelSubmit = (value: { user_id: string; password: string }) => {
    login(value);
  };

  return (
    <Form onFinish={handelSubmit}>
      {user ? <div>登入成功 使用者:{user?.Useer_id}</div> : null}
      <Form.Item
        name="username"
        rules={[{ required: true, message: "請輸入帳號" }]}
        wrapperCol={{ span: 8, offset: 8 }}
      >
        <Input id={"username"} type="text" placeholder="帳號" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "請輸入密碼" }]}
        wrapperCol={{ span: 8, offset: 8 }}
      >
        <Input.Password id={"password"} type="password" placeholder="密碼" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 11 }}>
        <Button shape="round" size="large" htmlType="submit" type="primary">
          登入
        </Button>
      </Form.Item>
    </Form>
  );
};
