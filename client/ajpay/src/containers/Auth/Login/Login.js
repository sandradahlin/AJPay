import { useState, useRef, useContext } from "react";
import LoginForm from "../../../components/LoginForm/LoginForm";
import {AuthContext} from '../../../context/auth-context'

const Login = () => {
  
  const authContext = useContext(AuthContext)
  const [loginError, setLoginError] = useState(false);
  const loginRef = useRef();
  const passRef = useRef();

  const loginHandler = (event) => {
    event.preventDefault();
    const authData = {
      email: loginRef.current.value,
      password: passRef.current.value,
      returnSecureToken: true,
    };

    //axios send authData as payload
    //success, we get back a token and expiry date
    setTimeout(()=>{
        const expirationDate = new Date(
        new Date().getTime() + (60*5) * 1000);
        
        authContext.login(99,expirationDate)
    }, 1000)

    //fail, setLoginError
  };

  return (
    <LoginForm
      loginHandler={loginHandler}
      loginError={loginError}
      loginRef={loginRef}
      passRef={passRef}
    />
  );
};

export default Login;
