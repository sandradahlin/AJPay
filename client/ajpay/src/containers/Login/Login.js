import { useState, useEffect, useRef } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const [loginError, setLoginError] = useState(false);

  const loginHandler = (event) => {
    console.log("Attempting login!");
    event.preventDefault();
    console.log("Logged in?");
    setLoginError((prevstate) => {
      return !prevstate;
    });
  };

  return <LoginForm loginHandler={loginHandler} loginError={loginError} />;
};

export default Login;
