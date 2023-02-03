import React from "react";
import "./pages.css";

export const Footer = () => {
  return (
    <section className=" Footer p-14 text-white">
      <div className="container_c-lg flex">
        <div className="contact flex flex-1 flex-col items-center justify-between text-center">
          <div className="">
            <h1 className="py-4 text-4xl">Let's Develop</h1>
            <p className="tracking-widest">Ask us anything or just say hi.</p>
          </div>
          <div className="pb-6">
            <p>phone: 09959165651</p>
            <p>email: yemyo994@gmail.com</p>
          </div>
        </div>
        <div className="form w-full flex-1 text-white">
          <form action="">
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
              className="mt-2 w-full bg-baseBlue py-3 text-xl text-white"
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
