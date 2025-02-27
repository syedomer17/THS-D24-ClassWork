import React from "react";

const Navbar = () => {
  // Placeholder function for toggle navigation menu
  const myFunction = () => {
    // Logic to toggle the navigation menu for small screens
    const navDemo = document.getElementById("navDemo");
    if (navDemo.classList.contains("w3-show")) {
      navDemo.classList.remove("w3-show");
    } else {
      navDemo.classList.add("w3-show");
    }
  };

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-black w3-card">
          {/* Toggle Navigation Menu Button (for small screens) */}
          <a
            className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
            href="javascript:void(0)"
            onClick={myFunction}
            title="Toggle Navigation Menu"
          >
            <i className="fa fa-bars"></i>
          </a>

          {/* Navigation Links */}
          <a href="#" className="w3-bar-item w3-button w3-padding-large">
            HOME
          </a>
          <a
            href="#band"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            BAND
          </a>
          <a
            href="#tour"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            TOUR
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            CONTACT
          </a>

          {/* Dropdown Menu */}
          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-padding-large w3-button" title="More">
              MORE <i className="fa fa-caret-down"></i>
            </button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
              <a href="#" className="w3-bar-item w3-button">
                Merchandise
              </a>
              <a href="#" className="w3-bar-item w3-button">
                Extras
              </a>
              <a href="#" className="w3-bar-item w3-button">
                Media
              </a>
            </div>
          </div>

          {/* Search Icon */}
          <a
            href="javascript:void(0)"
            className="w3-padding-large w3-hover-red w3-hide-small w3-right"
          >
            <i className="fa fa-search"></i>
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu (Hidden by Default) */}
      <div
        id="navDemo"
        className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
        style={{ marginTop: "46px" }}
      >
        <a
          href="#band"
          className="w3-bar-item w3-button w3-padding-large"
          onClick={myFunction}
        >
          BAND
        </a>
        <a
          href="#tour"
          className="w3-bar-item w3-button w3-padding-large"
          onClick={myFunction}
        >
          TOUR
        </a>
        <a
          href="#contact"
          className="w3-bar-item w3-button w3-padding-large"
          onClick={myFunction}
        >
          CONTACT
        </a>
        <a
          href="#"
          className="w3-bar-item w3-button w3-padding-large"
          onClick={myFunction}
        >
          MERCH
        </a>
      </div>
    </>
  );
};

export default Navbar;
