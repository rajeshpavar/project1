import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

function Adminheader() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary">
            <i className="fa fa-book me-3" />
            eLEARNING
          </h2>
        </a>

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
            <NavLink to="/productInfo" className="nav-item nav-link active">
              Service-Info
            </NavLink>
            <NavLink to="/getProduct" className="nav-item nav-link active">
              Add Course
            </NavLink>
            <NavLink to="/getContact" className="nav-item nav-link active">
              Add Categories
            </NavLink>
            <NavLink to="/team" className="nav-item nav-link active">
              Add Instructor
            </NavLink>
             <NavLink to="/admin" className="nav-item nav-link active">
              Add Admin
            </NavLink>
            <NavLink to="/admin-account" className="nav-item nav-link active d-flex align-items-center">
              <i className="fa fa-user-shield me-2" /> Admin Account
            </NavLink>

            <select
              className="nav-link"
              onChange={handleChange}
              style={{ padding: "6px", border: "none", background: "transparent", fontSize: "16px" }}
            >
              <option value="">Manage Data</option>
              <option value="/manageCourse"><NavLink to="/manageCourse" className="nav-item nav-link active">
                        Manage Courses
                      </NavLink></option>
              <option value="/manageCategarios"><NavLink to="/manageCategarios" className="nav-item nav-link active">
                        Manage Categarios
                      </NavLink></option>
              <option value="/manageInstructor"><NavLink to="/manageInstructor" className="nav-item nav-link active">
                        Manage Instructor
                      </NavLink></option>


                       <option value="/manageAdmin"><NavLink to="/manageAdmin" className="nav-item nav-link active">
                        Manage Admin
                      </NavLink></option>


           </select>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Adminheader;