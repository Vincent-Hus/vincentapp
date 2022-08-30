import { Button } from "antd";
import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnauthenticationApp = () => {
  const [isRegister, setRegister] = useState(false);
  return (
    <div>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <Button onClick={() => setRegister(!isRegister)} type="link">
        {isRegister ? "已有帳號 點擊登入" : "沒有帳號?點擊註冊"}
      </Button>
    </div>
  );
};
