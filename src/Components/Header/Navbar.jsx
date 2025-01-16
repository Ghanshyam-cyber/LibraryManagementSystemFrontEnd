import React from "react";
import { Link, useNavigate, useParams } from "react-router";

function Navbar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light rounded-5 mx-auto mt-3" style={{maxWidth: "95%"}}>
        <div className="container-fluid justify-content-center ">
          <a className="navbar-brand border-radius" to="#" style={{textAlign: "center"}}>
            <img
              src="/images/logo.png"
              alt="Library"
              width="30"
              height="24"
            />
            <span className="ms-2">Library Management System</span>
            <img className="ms-2"
              src="/images/logo.png"
              alt="Library"
              width="30"
              height="24"
            />
          </a>        
        </div>
      </nav>
   </div>
  );
}

export default Navbar;
