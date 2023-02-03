import React from "react";
import "../../styles/Footer.css";

export const Footer = () => {
  return (
    <section className="Footer">
      <div className="container_c-lg footer_container">
        <div className="contact">
          <div className="">
            <h1>Let's Develop</h1>
            <p style={{ letterSpacing: 1, paddingBottom: 5 }}>
              Ask us anything or just say hi.
            </p>
          </div>
          <div className="phone_email">
            <p>phone: 09959165651</p>
            <p>email: yemyo994@gmail.com</p>
          </div>
        </div>
        <div className="footer_form">
          <form>
            <label>First Name</label>
            <input type="text" name="Name" placeholder="Enter your name.." />

            <label>Email</label>
            <input type="text" name="Email" placeholder="Enter your email.." />

            <label>Your Message</label>
            <textarea
              className="textfield"
              style={{ resize: "none" }}
              name="Your Message"
              placeholder="Your Message.."
            />

            <button
              className=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
