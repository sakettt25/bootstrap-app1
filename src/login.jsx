import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  // Function to prevent spaces in email input
  const handleEmailInput = (e) => {
    const value = e.target.value.replace(/\s/g, ""); // Remove spaces
    setEmail(value);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        {/* Left Section with Text and Image */}
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center p-5">
          <h2>
            <span className="fw-bold">Explore your </span>
            <span className="text-primary">hobby</span> or
            <span className="text-secondary"> passion</span>
          </h2>
          <p className="mt-3">
            Sign-{isSignIn ? "in" : "up"} to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform.
          </p>
          {/* Image */}
          <div className="w-100 mt-4">
            <img src={`${process.env.PUBLIC_URL}/Screenshot 2025-02-08 011216.png`} alt="Hobby Community" className="img-fluid" />
          </div>
        </div>

        {/* Right Section with Login Form */}
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">
          <div className="w-100" style={{ maxWidth: "400px", background: "#F4F1F8", padding: "30px", borderRadius: "10px" }}>
            <h4 className="text-center mb-4">
              <span className={`fw-bold ${isSignIn ? "text-primary" : "text-muted"}`} style={{ cursor: "pointer" }} onClick={() => setIsSignIn(true)}>Sign In</span>
              <span className="mx-2">|</span>
              <span className={`fw-bold ${!isSignIn ? "text-primary" : "text-muted"}`} style={{ cursor: "pointer" }} onClick={() => setIsSignIn(false)}>Join In</span>
            </h4>
            <button className="btn btn-outline-dark w-100 mb-2 d-flex align-items-center justify-content-center">
              <i className="bi bi-google me-2"></i>
              Continue with Google
            </button>
            <button className="btn btn-outline-dark w-100 mb-3 d-flex align-items-center justify-content-center">
              <i className="bi bi-facebook me-2"></i>
              Continue with Facebook
            </button>
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">Or connect with</span>
              <hr className="flex-grow-1" />
            </div>
            <form>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email" 
                  required 
                  value={email} 
                  onChange={handleEmailInput} 
                />
              </div>
              <div className="mb-3 position-relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="form-control" 
                  placeholder="Password" 
                  required 
                />
                <span
                  className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                </span>
              </div>
              <small className="text-muted d-block text-end">Password strength</small>
              <button type="submit" className="btn w-100 mt-3" style={{ backgroundColor: "#8662C7", color: "white" }}>
                {isSignIn ? "Agree and Continue" : "Sign Up"}
              </button>
            </form>
            <p className="text-center mt-3 text-muted">
              By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
