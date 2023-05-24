import React, { useRef } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./ContactUs.module.css";
const ContactUs = () => {
  const NameRef = useRef();
  const EmailRef = useRef();
  const phoneRef = useRef();
  async function contactUsHandler() {
    const obj = {
      name: NameRef.current.value,
      email: EmailRef.current.value,
      phone: phoneRef.current.value,
    };

    await fetch(
      "https://react-53589-default-rtdb.firebaseio.com/enquiry.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    NameRef.current.value = "";
    EmailRef.current.value = "";
    phoneRef.current.value = "";
  }

  return (
    <>
      <header>
        <Navbar style={{ backgroundColor: "black" }} expand="sm" variant="dark">
          <Container>
            <ul>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  HOME
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/store" style={{ color: "white" }}>
                  STORE
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/about" style={{ color: "white" }}>
                  ABOUT
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/contactus" style={{ color: "white" }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </Container>
        </Navbar>
      </header>

      <Container>
        <form className={classes.ContactUs}>
          <h1>Enquiry</h1>
          <div className={classes.items}>
            <label>Name</label>
            <input type="text" ref={NameRef}></input>
          </div>
          <div className={classes.items}>
            <label>Email ID</label>
            <input type="email" ref={EmailRef}></input>
          </div>
          <div className={classes.items}>
            <label>Phone Number</label>
            <input type="text" ref={phoneRef}></input>
          </div>
          <Button variant="warning" onClick={contactUsHandler}>
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default ContactUs;
