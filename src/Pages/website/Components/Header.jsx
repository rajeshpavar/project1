import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const isLoggedIn = typeof window !== "undefined" ? !!localStorage.getItem("uid") : false;
  const userRole = typeof window !== "undefined" ? localStorage.getItem("urole") : null;

  const handleLogout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("uname");
    localStorage.removeItem("uemail");
    localStorage.removeItem("uphone");
    localStorage.removeItem("urole");
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <NavLink
        to="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 className="m-0 text-primary">
          <i className="fa fa-book me-3" />
          eLEARNING
        </h2>
      </NavLink>

      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          
          <NavLink to="/"  className="nav-item nav-link active">
          Home
          </NavLink>
          <NavLink to="/about"  className="nav-item nav-link active">
          about
          </NavLink>
          <NavLink to="/courses"  className="nav-item nav-link active">
          Courses
          </NavLink>
         
         
          
          <NavLink to="/contact"  className="nav-item nav-link active">
          Contact
          </NavLink>
        </div>
        {isLoggedIn ? (
          <div className="d-flex align-items-center gap-2 px-3">
            {userRole === "user" && (
              <NavLink to="/my-account" className="nav-item nav-link active d-flex align-items-center">
                <i className="fa fa-user me-2" /> My Account
              </NavLink>
            )}
            {userRole === "admin" && (
              <NavLink to="/admin-account" className="nav-item nav-link active d-flex align-items-center">
                <i className="fa fa-user-shield me-2" /> Admin Account
              </NavLink>
            )}
            <button onClick={handleLogout} className="btn btn-link nav-link">Logout</button>
          </div>
        ) : (
          <NavLink to="/join"  className="nav-item nav-link active">
            JOIN-NOW
          </NavLink>
        )}
         
      </div>
    </nav>
  );
}

export default Header;
