import { Form, Input, Button } from "antd";

export const RegisterScreen = () => {
  const register = (data: { user_id: string; password: string }) => {
    return fetch(`https://localhost:7006/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (response: Response) => {
      if (response.ok) {
        console.log("註冊成功");
      }
    });
  };

  const handelSubmit = (value: { user_id: string; password: string }) => {
    register(value);
  };

  return (
    <Form onFinish={handelSubmit}>
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
      <Form.Item name="email">
        <Input id={"Email"} type="email" placeholder="電子郵件"></Input>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 11 }}>
        <Button shape="round" size="large" htmlType="submit" type="primary">
          登入
        </Button>
      </Form.Item>
    </Form>
  );
};
