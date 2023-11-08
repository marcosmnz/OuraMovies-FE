import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { login } from "../../services/api_auth";
import { User, AuthResponse } from "../../types/types";
import LoginView from "./LoginView";

export const Login: React.FC = () => {

    const [email, setEmail] = useState<string | undefined>('');
    const [password, setPassword] = useState<string | undefined>('');
    // const navigate = useNavigate();
    
  
    const auth = useAuth()
  
    const triggerBadLogin = () => {
      const error = document.getElementById('errorLogin')as HTMLElement; 
      error.classList.remove('hidden')
    }
  
    if (auth.isAuthenticated) {
      return <Navigate to="/dashboard" />;
    }
  
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const user: User = {
        email,
        password,
      };
      login(user).then((data: AuthResponse) => {
        if (data) {
          auth.saveUser(data);
          auth.getUser();
        } else {
          console.log('BadLogin');
          triggerBadLogin();
        }
      });
    };
  
  
  
  
  
    return (
      <LoginView  
      email={email}
      password={password}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onFormSubmit={handleLogin}
      ></LoginView>
    )
  }
  
