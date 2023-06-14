import { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { useContext } from "react";
import AuthContext from "../store/auth-context";
import classes from "./Login.module.css";

import MainHeader from "../components/MainHeader";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  let isLoading = false;

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6162fYAqVJ71rywFM_ESGbzow3iitodo",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";

            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        let finalEmail =emailInputRef.current.value.replace('@','');
        finalEmail = finalEmail.replace('.','');
        authCtx.setEmail(finalEmail)
        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });

  };
  return (
    <>
      <MainHeader />
      <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {isLoading ? <p>Sending Request...</p> : <button>submit</button>}
          </div>
        </form>
      </section>
    </>
  );
};
export default Login;
