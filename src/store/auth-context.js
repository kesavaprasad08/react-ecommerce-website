import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  setEmail: (email) => {},
  removeEmail: () => {},
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
const initialEmail = localStorage.getItem('email')

  const [email, setEmail] = useState(initialEmail);
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const setEmailhandler = (mailId) => {
    let emailRead = mailId.replace('@','');
   emailRead = emailRead.replace('.','');
    localStorage.setItem('email',emailRead)
    setEmail(mailId);
  };
  const removeEmailHandler = () => {
    setEmail('');
    localStorage.removeItem('email')
  }
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    setTimeout(() => {
      logoutHandler();
    }, 300000);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem('email');
  };
  const contextValue = {
    token: token,
    email: email,
    setEmail:setEmailhandler,
    removeEmail:removeEmailHandler,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
