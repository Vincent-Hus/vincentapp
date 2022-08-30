import { AuthenticationApp } from "authenticated_app";
import { useAuth } from "context/auth_context";
import { UnauthenticationApp } from "screens/unauthenticated";
import "./App.css";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {user ? <AuthenticationApp /> : <UnauthenticationApp />}
    </div>
  );
}

export default App;
