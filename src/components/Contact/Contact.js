import React, { useState, useRef } from "react";
import "./contact.css";
import Phone from "../../img/icon-phone.svg";
import Email from "../../img/icon-email.svg";
import Github from "../../img/icon-github.svg";
// import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const formRef = useRef();

  const [setFormState, formState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [done, setDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user_name, user_email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g4z7eo4",
        "template_sf8knoa",
        formRef.current,
        "user_MUXDpJ00oxYuAsf8RPe7M"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log("Form", formState);
          }
        }
      );
  };

  const handleChange = (e) => {
    if (e.target.name === "user_email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your e-mail is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.user_name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">let's chat</h1>

          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon"></img>
              +1 415 747 5930
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon"></img>
              leticia.tnardi@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Github} alt="" className="c-icon"></img>
              @leticianardi
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-description">
            <b>What's your idea?</b> Tell me your ideas and what you want to
            acomplish and we will find how to make it.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              name="user_name"
              defaultValue={user_name}
              onBlur={handleChange}
            ></input>
            <input
              type="text"
              placeholder="Your e-mail"
              name="user_email"
              defaultValue={user_email}
              onBlur={handleChange}
            ></input>
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              defaultValue={message}
            ></textarea>

            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}

            <button>Submit</button>
            {done && " Thank you for contacting. "}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
