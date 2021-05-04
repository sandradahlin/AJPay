import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth-context";

const KeepAlive = () => {
    const authContext = useContext(AuthContext)
  useEffect(() => {
    const interval = setInterval(
      () => {
        axios
          .post("/keepalive", { authData: {} })
          .then((response) => {
            const expirationDate = new Date(
              new Date().getTime() + response.data.expiresIn * 1000
            );
            authContext.login(response.token, expirationDate)
          })
          .catch((err) => {
            // setLoginError(true);
          });
      },
      5 * 60 * 1000
    );
    return () => clearInterval(interval);
  });

  return <div />;
};

export default KeepAlive;
