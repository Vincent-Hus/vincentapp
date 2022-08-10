import { Form, Input, Button } from "antd";
import { useState } from "react";

export interface User {
  Useer_id: string;
  Password: string;
  Email: string;
  Token: string;
}

export const LoginForm = () => {
  const [Users, setUsers] = useState({ User_Id: "", Password: "", Email: "" });
  return (
    <Form labelCol={{ offset: 8 }} wrapperCol={{ span: 8 }}>
      <Form.Item label="帳號">
        <Input />
      </Form.Item>

      <Form.Item label="密碼">
        <Input />
      </Form.Item>
      <Form.Item label="信箱">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 12 }}>
        <Button shape="round" size="large">
          註冊
        </Button>
      </Form.Item>
    </Form>
  );
};
