import React from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "../../App.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark">
        <div className="container py-2 ">
          <div className="navbar-brand">
            <Link className="name-logo " to="/">
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
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Work
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {/* <a className="dropdown-item" href="#">
           
          </a> */}
                    <Link className="dropdown-item" to="/Lifestyle">
                      Lifestyle
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Fashion">
                      Fashion
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/Bridal">
                      Bridal
                    </Link>
                    <Link className="dropdown-item" to="/Advertising">
                      Advertising
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
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
