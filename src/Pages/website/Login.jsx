import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // Fetch users and admins from Firebase
      const userRes = await axios.get("https://itlearners-f748d-default-rtdb.firebaseio.com/user.json");
      const adminRes = await axios.get("https://itlearners-f748d-default-rtdb.firebaseio.com/admin.json");

      const userList = userRes.data
        ? Object.entries(userRes.data).map(([id, user]) => ({ id, ...user }))
        : [];

      const adminList = adminRes.data
        ? Object.entries(adminRes.data).map(([id, admin]) => ({ id, ...admin }))
        : [];

      // Check if email exists in admin list
      const existingAdmin = adminList.find((admin) => admin.email === data.email);
      if (existingAdmin) {
        if (existingAdmin.password !== data.password) {
          Swal.fire({ icon: "error", title: "Wrong password", text: "Wrong password for Admin!" });
          return;
        }

        localStorage.setItem("uid", existingAdmin.id);
        localStorage.setItem("uname", existingAdmin.name);
        localStorage.setItem("uemail", existingAdmin.email);
        localStorage.setItem("urole", "admin");

        await Swal.fire({ icon: "success", title: "Welcome back, Admin!", timer: 1200, showConfirmButton: false });
        navigate("/productInfo");
        return;
      }

      // Check if email exists in user list
      const existingUser = userList.find((user) => user.email === data.email);
      if (existingUser) {
        if (existingUser.password !== data.password) {
          Swal.fire({ icon: "error", title: "Wrong password", text: "Wrong password for User!" });
          return;
        }

        localStorage.setItem("uid", existingUser.id);
        localStorage.setItem("uname", existingUser.name);
        localStorage.setItem("uemail", existingUser.email);
        if (existingUser.phone) localStorage.setItem("uphone", existingUser.phone);
        localStorage.setItem("urole", "user");

        await Swal.fire({ icon: "success", title: "Login successful", timer: 1200, showConfirmButton: false });
        navigate("/my-account");
        return;
      }

      // If email not found in either list
      Swal.fire({ icon: "warning", title: "Email not found", text: "No matching user or admin." });

    } catch (err) {
      console.error("Login error:", err);
      Swal.fire({ icon: "error", title: "Login failed", text: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Login</h2>
        </div>

        <form className="auth-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handler}
              value={data.email}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handler}
              value={data.password}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>

          <h6 style={{ textAlign: "center" }}>
            <a href="/join">Don't Have an Account...?</a>
          
            {/* <a href="/admin">Are You Admin...?</a> */}
          </h6>
        </form>
      </div>
    </div>
  );
}

export default Login;