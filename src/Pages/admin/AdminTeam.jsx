import axios from 'axios'
import React, { useState } from 'react'

function AdminTeam() {
  const [data,setData]=useState({
     name:"",
      yearsOfExpriance:"",
      designation:"",
      student:"",
      img:""
  })

  const eventHandler=(E)=>{
    setData(
     {
       ...data,
      [E.target.name]:E.target.value
     }
    )
    
  }

  const fetchData=async()=>{
    const res=await axios.post(`https://itlearners-f748d-default-rtdb.firebaseio.com/instructor.json`,data);
    setData({
      ...data,
        name:"",
      yearsOfExpriance:"",
      designation:"",
      student:"",
      img:""
    })
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    fetchData()
  }
  return (
    <>

     <div className="auth-container">
        <div className="auth-box">
          <div className="auth-header">
            <h2> Add Instructor </h2>
          </div>
       <form className="auth-form" onSubmit={submitHandler} >
           

             <div className="form-group">
              <label htmlFor="course">Intructor Name</label>
              <input
                onChange={eventHandler}
                id="instructor"
                name="name"
                value={data.name}
               placeholder='please enter instructor name'
                required
              />
            </div>

             <div className="form-group">
              <label htmlFor="course">Years of Experiance </label>
              <input
               onChange={eventHandler}
                id="yearsOfExpriance"
                name="yearsOfExpriance"
                value={data.yearsOfExpriance}
               placeholder='please enter years Of Expriance '
                required
              />
            </div>

             <div className="form-group">
              <label htmlFor="course">Current Number Of Student</label>
              <input
                onChange={eventHandler}
                id="student"
                name="student"
                value={data.student}
               placeholder='please enter total students '
                required
              />
            </div>

           <div className="form-group">
              <label htmlFor="courese">Designation</label>
              <input
                 onChange={eventHandler}
                id="designation"
                name="designation"
                value={data.designation}
               placeholder='please enter designation of Instructor'
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="courese">Image Url</label>
              <input
                 onChange={eventHandler}
                id="img"
                name="img"
                value={data.img}
               placeholder='please enter image Url'
                required
              />
            </div>

           
              <button type="submit" className="submit-btn">
           Add Instructor
          </button>
          
          </form>
           </div>
      </div>
    </>
  )
}

export default AdminTeam