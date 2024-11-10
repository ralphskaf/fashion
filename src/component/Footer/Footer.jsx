import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4">
          <div className="me-5 d-none d-lg-block">
            <span>
              <FaRegCopyright /> {currentYear} All rights reserved
            </span>
          </div>

          <div>
            <Link
              className="me-4 text-reset"
              to="https://www.instagram.com/kristina_mznk/"
            >
              <FaInstagram className="fs-4 icons" />
            </Link>
          </div>
          {/* Right */}
        </section>
      </footer>
    </>
  );
}
