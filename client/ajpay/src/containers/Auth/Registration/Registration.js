import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import RegistrationForm from "../../../components/RegistrationForm/RegistrationForm";
import {AuthContext} from "./../.././../context/auth-context"
import { checkValidity } from "../../../shared/validation";

const Registration = () => {
  const authContext = useContext(AuthContext)

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const emailRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredEmail === emailRef.current.value) {
        console.log(enteredEmail);
        if (checkValidity(enteredEmail, { isEmail: true })) {
          console.log("Is valid Email format!");

          //ask back-end for availability

          setEmailError(false);
        } else {
          if (enteredEmail.length > 0) setEmailError(true);
        }
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredEmail, emailRef]);

  const [enteredPass, setEnteredPass] = useState("");
  const [passError, setPassError] = useState(false);
  const passwordRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredPass === passwordRef.current.value) {
        console.log(enteredPass);
        if (
          checkValidity(enteredPass, { minLength: 8 }) &&
          checkValidity(enteredPass, { maxLength: 128 })
        ) {
          console.log("Password length ok");
          setPassError(false);
        } else setPassError(true);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredPass, passwordRef]);

  const [enteredPassConfirm, setEnteredPassConfirm] = useState("");
  const [passConfirmError, setPassConfirmError] = useState(false);
  const passwordConfirmRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredPassConfirm === passwordConfirmRef.current.value) {
        console.log(enteredPassConfirm + ", " + passwordRef.current.value);
        if (enteredPassConfirm !== passwordRef.current.value) {
          console.log("Password does not match!");
          setPassConfirmError(true);
        } else {
          console.log("Password matches!");
          setPassConfirmError(false);
        }
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredPassConfirm, passwordConfirmRef, passwordRef]);

  const submitHandler = (event) => {
    console.log("Submitting!");
    event.preventDefault();
    console.log(event);
    const authData = {
      email: enteredEmail,
      password: enteredPass,
      returnSecureToken: true,
    };

    axios
      .post("/register", authData)
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        authContext.login()
        //redirect to logged in landing
        // start timer for auto log out if inactive
      })
      .catch((err) => {
        // setLoginError(true);
      });

    console.log("Submitted!");
    //submit to backend
  };

  return (
    <RegistrationForm
      submitHandler={submitHandler}
      emailRef={emailRef}
      emailHandler={setEnteredEmail}
      emailError={emailError}
      passwordRef={passwordRef}
      passwordHandler={setEnteredPass}
      passError={passError}
      passwordConfirmRef={passwordConfirmRef}
      passwordConfirmHandler={setEnteredPassConfirm}
      passConfirmError={passConfirmError}
    />
  );
};

export default Registration;
