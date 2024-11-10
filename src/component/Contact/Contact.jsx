import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "../../assets/img-1.jpeg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send data to Formspree
    axios
      .post("https://formspree.io/f/xovqwjvg", formData)
      .then((response) => {
        toast.success("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast.error("Oops! Something went wrong, please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-center">
                <img
                  src={img1}
                  alt=""
                  className="img-fluid"
                  style={{
                    borderRadius: "2rem",
                    maxHeight: "650px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <section className="">
                <div>
                  <div className="With-me py-5 text-white">
                    <h1 className="span">Get in Touch</h1>
                    <p>
                      I’m always excited to meet new people and explore new
                      opportunities. Whether you’re looking for a personal
                      stylist, need editorial styling for a project, or just
                      want some fashion advice, feel free to reach out.
                    </p>
                  </div>

                  {/* Contact form */}
                  <form onSubmit={handleSubmit}>
                    <div className="contact-form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="custom-button my-5"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
