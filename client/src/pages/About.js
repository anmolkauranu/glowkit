import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/AboutUs.css";

const About = () => {
  return (
    <Layout title={"About us - GLOW KIT"}>
      <div className="about-container">
        <h1>About GlowKit</h1>
        <p>
          Introducing <strong>GlowKit</strong>, your premier destination for all
          things beauty and self-expression! ..... At GlowKit, we're passionate
          about helping you discover and embrace your unique beauty journey.
          .... Whether you're a makeup enthusiast, skincare lover, or someone
          exploring the world of beauty for the first time, ..... GlowKit offers
          an extensive range of high-quality products curated to inspire and
          empower. ..... From luxurious cosmetics to innovative skincare
          solutions, we're dedicated to providing you with the tools and
          resources to enhance your natural radiance and confidence. ......Join
          us on this exciting adventure, where beauty knows no bounds, and every
          shade tells a story. .......Welcome to GlowKit – where beauty shines
          from within.
        </p>
      </div>
    </Layout>
  );
};

export default About;
