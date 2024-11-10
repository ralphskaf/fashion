import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBarsStaggered, FaInstagram } from "react-icons/fa6";
import "../../App.css";

export default function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container py-2">
          <div className="navbar-brand">
            <Link className="name-logo" to="/">
              <span className="span">kristina</span> mazanik
            </Link>
          </div>

          <button
            type="button"
            className="navbar-toggler text-white"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <FaBarsStaggered />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    location.pathname.startsWith("/Lifestyle") ||
                    location.pathname.startsWith("/Fashion") ||
                    location.pathname.startsWith("/Bridal") ||
                    location.pathname.startsWith("/Advertising")
                      ? "active"
                      : ""
                  }`}
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                  onClick={handleDropdownToggle}
                >
                  Work
                </a>
                <ul
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/Lifestyle" ? "active" : ""
                      }`}
                      to="/Lifestyle"
                      onClick={handleDropdownItemClick}
                    >
                      Lifestyle
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/Fashion" ? "active" : ""
                      }`}
                      to="/Fashion"
                      onClick={handleDropdownItemClick}
                    >
                      Fashion
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/Bridal" ? "active" : ""
                      }`}
                      to="/Bridal"
                      onClick={handleDropdownItemClick}
                    >
                      Bridal
                    </Link>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/Advertising" ? "active" : ""
                      }`}
                      to="/Advertising"
                      onClick={handleDropdownItemClick}
                    >
                      Advertising
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="https://www.instagram.com/kristina_mznk/"
                >
                  <FaInstagram className="fs-4 icons" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
