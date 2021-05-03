import {createContext, useState, useEffect, useCallback} from 'react'

let logoutTimer;

export const AuthContext = createContext({
    isAuth: false,
    token: '',
    login: (token) => {},
    logout: () => {},
})

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
  
    const remainingTime = calculateRemainingTime(storedExpirationDate);
  
    if (remainingTime <= 3600) {
      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');
      return null;
    }
  
    return {
      token: storedToken,
      duration: remainingTime,
    };
  };

  const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
  
    const remainingDuration = adjExpirationTime - currentTime;
  
    return remainingDuration;
  };
  

const AuthContextProvider = (props)=> {

    const tokenData = retrieveStoredToken();
  
    let initialToken;
    if (tokenData) {
      initialToken = tokenData.token;
    }

    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;
  
    const logoutHandler = useCallback(() => {
      setToken(null);
      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');
  
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
    }, []);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
    
        const remainingTime = calculateRemainingTime(expirationTime);
    
        logoutTimer = setTimeout(logoutHandler, remainingTime);
      };

      useEffect(() => {
        if (tokenData) {
          console.log(tokenData.duration);
          logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
      }, [tokenData, logoutHandler]);
    
      const contextValue = {
        token: token,
        isAuth: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
        )
}

export default AuthContextProvider