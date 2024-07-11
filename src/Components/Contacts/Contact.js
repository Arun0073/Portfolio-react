import React,{useRef, useState,useContext} from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  const form = useRef();
  const[message,setMessage]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5cfdn4', 'template_kt2sflw', form.current, 'enmCZqt-Pr23ROcrt')
      .then((result) => {
          console.log(result.text);
          setMessage(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-form" >
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkmode?'white': ''}} >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{message && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
      </form>
      </div>
    </div>
  );
};

export default Contact;