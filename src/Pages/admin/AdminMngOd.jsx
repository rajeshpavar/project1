import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useId } from 'react'

function AdminMngOd() {




   
const [data,setData]=useState({
  course:"",
  name:"",
  time:"",
  student:"",
  price:"",
  img:"",
  id:''
})
  const eventHandler=(E)=>{
    
     setData({...data,
      [E.target.name]:E.target.value
    })
     console.log(data);
     
  }

  //

   const submitHandler=async(e)=>{
  e.preventDefault();
  const res=await axios.post(`https://itlearners-f748d-default-rtdb.firebaseio.com/products.json`,data);
  setData({...setData,
 course:"",
  price:"",
  img:"",
  time:"",
  student:"",
  name:"",
  id:''})
 }
  return (
        <>
       <div className="auth-container">
        <div className="auth-box">
          <div className="auth-header">
            <h2> Add Course </h2>
          </div>

          <form className="auth-form" onSubmit={submitHandler} >
            <div className="form-group">
              <label htmlFor="course">Course Name</label>
              <input
                onChange={eventHandler}
                id="course"
                name="course"
                value={data.course}
               placeholder='please enter course name'
                required
              />
            </div>

             <div className="form-group">
              <label htmlFor="course">Tutor Name</label>
              <input
                onChange={eventHandler}
                id="name"
                name="name"
                value={data.name}
               placeholder='please enter tutor name'
                required
              />
            </div>

             <div className="form-group">
              <label htmlFor="course">Course Hours</label>
              <input
                onChange={eventHandler}
                id="time"
                name="time"
                value={data.time}
               placeholder='please enter course duration '
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
              <label htmlFor="price">Price</label>
              <input
                 onChange={eventHandler}
                id="price"
                name="price"
                value={data.price}
               placeholder='please enter price of courese'
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="course">Image</label>
              <input
                 onChange={eventHandler}
                id="img"
                name="img"
                value={data.img}
               placeholder='please provide image url here'
                required
              />
            </div>
              <button type="submit" className="submit-btn">
           Add Course
          </button>
          
          </form>
        </div>
      </div>
    </>
  )
}

export default AdminMngOd