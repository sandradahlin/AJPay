import { useState, useRef } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import axios from "../../axios-auth";

const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const loginRef = useRef();
  const passRef = useRef();

  const loginHandler = (event) => {
    console.log("Attempting login!");
    event.preventDefault();
    const authData = {
      email: loginRef.current.value,
      password: passRef.current.value,
      returnSecureToken: true,
    };

    console.log(authData);
    axios
      .post("/login", authData)
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);

        //redirect to logged in landing
        // start timer for auto log out if inactive
      })
      .catch((err) => {
        setLoginError(true);
      });
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
