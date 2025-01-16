import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router";

function Navbar({ managerId }) {
  // const {managerId,userId, bookId} = useParams();
  const navigate = useNavigate();
  
  console.log("Navbar managerId:", managerId);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Library Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
              <div>
                <button
                  className="nav-link"
                  onClick={() => {
                    if (managerId) {
                      navigate(`/users/${managerId}`);
                    } else {
                      console.error("Manager ID is undefined");
                    }
                  }}
                  role="button"
                >
                  Users
                </button>
              </div>
              <div>
                <Link
                  className="nav-link mx-2"
                  to={`books/${managerId}`}
                  role="button"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
