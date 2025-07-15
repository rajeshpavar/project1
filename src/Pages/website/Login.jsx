import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const redirect=useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handeler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const submitHandler = async (e) => {
   
      e.preventDefault();
    const res = await axios.get(`http://localhost:3000/user?email=${data.email}`);
  

    if(res.data.length>0){
        if(res.data[0].password===data.password){
             localStorage.setItem('uid',res.data[0].id);
          localStorage.setItem('uname',res.data[0].name);
          localStorage.setItem('uemail',res.data[0].email);
          return redirect('/productInfo');
        }else{
             alert('Wong Password !')
        return false;
        }
       
    } else{
            alert('Email does not Exist !')
      return false;
        }

    
   
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-header">
            <h2> Login </h2>
          </div>

          <form className="auth-form" onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handeler}
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
                onChange={handeler}
                value={data.password}
                required
              />
            </div>
              <button type="submit" className="submit-btn">
           submit
          </button>
           <h6 style={{textAlign:'center'}}> <a  href="/join">Don't Have Account...?</a></h6>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
