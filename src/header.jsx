import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaBell, FaShoppingCart, FaBookmark } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-3">
      <div className="container-fluid d-flex align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center me-3">
          <div className="border border-3 border-primary p-1 rounded">
            <h1 className="text-primary m-0 fw-bold fst-italic">h</h1>
          </div>
          <div className="ms-2">
            <span className="fw-bold text-primary" style={{ fontSize: "1.2rem" }}>
              hobbycue
            </span>
            <br />
            <small className="fst-italic text-secondary">
              Your Hobby, Your Community
            </small>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow-1 mx-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search here.." />
            <button className="btn btn-primary">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="d-flex align-items-center">
          <Dropdown className="me-3">
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              ⚡ Explore
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Option 1</Dropdown.Item>
              <Dropdown.Item href="#">Option 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Dropdown className="me-3">
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              ⭐ Hobbies
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Hobby 1</Dropdown.Item>
              <Dropdown.Item href="#">Hobby 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <FaBookmark className="me-3 text-primary" size={18} />
          <FaBell className="me-3 text-primary" size={18} />
          <FaShoppingCart className="me-3 text-primary" size={18} />

          <button className="btn btn-outline-primary">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;