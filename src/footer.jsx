import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaGoogle, FaYoutube, FaTelegram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Function to handle input change (removes spaces)
  const handleEmailChange = (e) => {
    setEmail(e.target.value.replace(/\s/g, "")); // Removes all spaces dynamically
  };

  // Email validation function
  const validateEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Invitation sent to " + email);
      setEmail("");
    }
  };

  return (
    <footer style={{ backgroundColor: "#faf7fc", padding: "40px 20px", textAlign: "center" }}>
      <div className="container">
        <div className="row">
          {/* Hobbycue Column */}
          <div className="col-md-3 text-start">
            <h6 className="fw-bold">Hobbycue</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* How Do I Column */}
          <div className="col-md-3 text-start">
            <h6 className="fw-bold">How Do I</h6>
            <ul className="list-unstyled">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-3 text-start">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="col-md-3 text-start">
            <h6 className="fw-bold">Social Media</h6>
            <div className="d-flex gap-3 flex-wrap">
              <FaFacebookF size={20} />
              <FaTwitter size={20} />
              <FaInstagram size={20} />
              <FaPinterestP size={20} />
              <FaGoogle size={20} />
              <FaYoutube size={20} />
              <FaTelegram size={20} />
              <FaEnvelope size={20} />
            </div>

            {/* Invite Friends */}
            <h6 className="fw-bold mt-3">Invite Friends</h6>
            <form onSubmit={validateEmail} className="d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                required
                style={{
                  border: "1px solid #a182b3",
                  borderRadius: "5px 0 0 5px",
                  padding: "5px 10px",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#7b5aa6",
                  color: "white",
                  border: "none",
                  padding: "5px 15px",
                  borderRadius: "0 5px 5px 0",
                }}
              >
                Invite
              </button>
            </form>
            {error && <small style={{ color: "red" }}>{error}</small>}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-4" style={{ backgroundColor: "#f3edf8", padding: "10px", fontSize: "14px" }}>
          © Purple Cues Private Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
