import { Form, Input, Button } from "antd";

export const LoginForm = () => {
  return (
    <Form labelCol={{ offset: 8 }} wrapperCol={{ span: 8 }}>
      <Form.Item label="帳號">
        <Input />
      </Form.Item>

      <Form.Item label="密碼">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 12 }}>
        <Button shape="round" size="large">
          登入
        </Button>
      </Form.Item>
    </Form>
  );
};
