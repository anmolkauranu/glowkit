import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "../styles/ContactUs.css";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          We love to hear from our GlowKit family! If you have any questions,
          feedback, or just want to share your beauty journey with us, please
          reach out.
        </p>

        <p>
          <BiMailSend /> : www.anmolkauur678.com
        </p>
        <p>
          <BiPhoneCall /> : 91 98727XX09
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
