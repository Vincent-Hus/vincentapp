import { Form, Input, Button } from "antd";
import { FormEvent } from "react";

export const LoginScreen = () => {
  const login = (data: { username: string; password: string }) => {
    return fetch(`https://localhost:7006/api/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (response: Response) => {
      if (response.ok) {
      }
    });
  };

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };

  return (
    <Form
      labelCol={{ offset: 8 }}
      wrapperCol={{ span: 8 }}
      onFinish={handelSubmit}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "請輸入帳號" }]}
      >
        <Input id={"username"} type="text" placeholder="帳號" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "請輸入密碼" }]}
      >
        <Input.Password id={"password"} type="password" placeholder="密碼" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 12 }}>
        <Button shape="round" size="large" htmlType="submit">
          登入
        </Button>
      </Form.Item>
    </Form>
  );
};
