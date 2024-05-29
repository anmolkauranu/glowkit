import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/Policy.css";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="privacy-policy-container">
        <h1>Privacy Policy for GlowKit</h1>
        <p>Last updated: May 09, 2024</p>
        <section>
          <h1>Introduction</h1>
          <p>
            Welcome to GlowKit. We respect your privacy and are committed to
            protecting your personal data. This privacy policy will inform you
            about how we look after your personal data when you visit our
            website and tell you about your privacy rights and how the law
            protects you.
          </p>
        </section>
        <section>
          <h3>Information We Collect</h3>
          <p>
            We collect various types of information for various purposes to
            provide and improve our service to you.
          </p>
        </section>
        <section>
          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>

          <p>Email: anmolkauur678.com</p>
          <p>Phone: +91 9872712309</p>
        </section>
      </div>
    </Layout>
  );
};

export default Policy;
