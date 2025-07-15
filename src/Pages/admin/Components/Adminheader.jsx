import React from 'react'
import { NavLink } from "react-router-dom";

function Adminheader() {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a
        href="index.html"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
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
          
          
          <NavLink to="/productInfo"  className="nav-item nav-link active">
          Service-Info
          </NavLink>
          <NavLink to="/getProduct"  className="nav-item nav-link active">
          Add Course
          </NavLink>

           <NavLink to="/getContact"  className="nav-item nav-link active">
          Add Categories
          </NavLink>
             <NavLink to="/team"  className="nav-item nav-link active" >
         Add Instructor
          </NavLink>
          
        </div>
         
       
         
       
      </div>
    </nav>
    </>
  )
}

export default Adminheader