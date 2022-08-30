import { Button } from "antd";
import { useAuth } from "context/auth_context";
import { ProjectScreen } from "./screens/project/index";

export const AuthenticationApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <ProjectScreen />
      <Button onClick={() => logout()}>登出</Button>
    </div>
  );
};
