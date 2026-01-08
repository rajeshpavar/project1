import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [useData, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    img: "",
  });

  const navigate = useNavigate();

  const handler = (e) => {
    setData({
      ...useData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Password Match Validation
    if (useData.password !== useData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(
        `https://itlearners-f748d-default-rtdb.firebaseio.com/admin.json`,
        useData
      );

      console.log("User added:", res.data.name); // Firebase returns unique ID

      // Reset form
      setData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        img: "",
      });

      
       navigate("/productInfo");
    } catch (err) {
      console.error("Error submitting data:", err);
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <>
    
      <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Admin-Sign Up</h2>
        </div>

        <form className="auth-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={useData.name}
              onChange={handler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={useData.email}
              onChange={handler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={useData.password}
              onChange={handler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
             
              value={useData.confirmPassword}
              onChange={handler}
              required
            />
          </div>

           <div className="form-group">
            <label htmlFor="img">Image</label>
            <input
              onChange={handler}
              id="img"
              name="img"
              value={useData.img}
              placeholder="Please provide image URL"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
         
        </form>
      </div>
    </div>


    </>
  )
}

export default Admin;
