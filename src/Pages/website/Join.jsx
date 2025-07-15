import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Join = () => {
 const [useData,setData]=useState({
  
  name:'',
  email:'',
  password:'',
  confirmPassword:''
 })

 const handeler=(e)=>{
setData({
  ...useData,
  [e.target.name]:e.target.value,

})

console.log(useData);

 }

 const submitHandler=async(e)=>{
  e.preventDefault();
  const res=await axios.post(`http://localhost:3000/user`,useData);
  setData({...useData,
  name:"",
  email:"",
  password:"",
  confirmPassword:""})
 }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2> signUp</h2>
          <button 
            className="toggle-btn"
           
          >
            
          </button>
        </div>

        <form  className="auth-form" onSubmit={submitHandler}>
        
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handeler}
                value={useData.name}
                required
              />
            </div>
          

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handeler}
              value={useData.email}
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
             value={useData.password}
              required
            />
          </div>

         
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handeler}
                value={useData.confirmPassword}
                required
              />
            </div>
          

          <button type="submit" className="submit-btn">
           submit
          </button>
       <h6 style={{textAlign:'center'}}> <a  href="/login">Alread Have Account...?</a></h6>
        </form>
      </div>
    </div>
  );
}

export default Join;
