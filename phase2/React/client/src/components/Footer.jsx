import React from "react";

const Footer = () => {
  return (
    <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
      {/* Social Media Icons */}
      <i className="fa fa-facebook-official w3-hover-opacity"></i>
      <i className="fa fa-instagram w3-hover-opacity"></i>
      <i className="fa fa-snapchat w3-hover-opacity"></i>
      <i className="fa fa-pinterest-p w3-hover-opacity"></i>
      <i className="fa fa-twitter w3-hover-opacity"></i>
      <i className="fa fa-linkedin w3-hover-opacity"></i>

      {/* Footer Text */}
      <p className="w3-medium">
        Powered by{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          w3.css
        </a>
      </p>
    </footer>
  );
};

export default Footer;
