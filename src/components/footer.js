import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()} Designed and built by
      <a href="https://paulkhoza.netlify.app" target="_blank" rel="noreferrer">
        Paul Khoza
      </a>
    </div>
  );
};

export default Footer;
