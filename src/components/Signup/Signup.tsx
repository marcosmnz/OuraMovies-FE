import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { register } from "../../services/api_auth";
import SignupView from "./SignupView";

export const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const auth = useAuth();
    const checkbox = document.getElementById('checkbox') as HTMLInputElement;
    const goTo = useNavigate()
  
  const validatePassword =() => {
      const password1 = (document.querySelector('#password1') as HTMLInputElement).value;
      const password2 = (document.querySelector('#password2') as HTMLInputElement).value;
      if (password1 === password2) {
        return true
      } else {
        return false
      }
    }
    const triggerErrorPasswords = () => {
      const error = document.getElementById('errorPasswords')as HTMLElement;
      error.classList.remove('hidden')
    }
    const triggerErrorCheckbox = () => {
      const error = document.getElementById('errorTerms')as HTMLElement; 
      error.classList.remove('hidden')
    }
    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!checkbox.checked) {
        triggerErrorCheckbox()
      } else if (validatePassword() === false) {
        triggerErrorPasswords()
      } else if(checkbox.checked && validatePassword() === true) {
        goTo('/login')
        console.log(name, password, email);
        register(name, email, password)
      }
  }
  
    if (auth.isAuthenticated) {
      return <Navigate to="/dashboard" />;
    }

  return (
    <SignupView 
    email={email} 
    name={name}
    password={password}
    onEmailChange={setEmail}
    onNameChange={setName}
    onPasswordChange={setPassword}
    onFormSubmit={handleSignup}
    ></SignupView>
  )
}