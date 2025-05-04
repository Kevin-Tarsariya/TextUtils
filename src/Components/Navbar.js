import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          {props.title}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Switch */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                {props.contactText}
              </a>
            </li>
          </ul>

          {/* Dark Mode Switch */}
          <div className="form-check form-switch text-nowrap">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              id="darkModeSwitch"
              role="switch"
            />
            <label className="form-check-label ms-2" htmlFor="darkModeSwitch">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ✅ Prop Types (strict property validation)
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  contactText: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  Mode: PropTypes.string.isRequired,
};

// ✅ Default Props (in case values not passed)
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About",
  contactText: "Contact",
};
