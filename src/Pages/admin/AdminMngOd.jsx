import axios from 'axios';
import React, { useState } from 'react';

function AdminMngOd() {
  // const [data, setData] = useState({
  //   course: "",
  //   name: "",
  //   time: "",
  //   student: "",
  //   price: "",
  //   img: ""
  //   // Note: we no longer include manual 'id'
  // });

  // const eventHandler = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Step 1: Post data to Firebase
  //     const res = await axios.post(
  //       `https://itlearners-f748d-default-rtdb.firebaseio.com/products.json`,
  //       data
  //     );

  //     // Step 2: Get Firebase-generated ID
  //     const firebaseId = res.data.name;
     
      

  //     // Step 3: Patch it back into that entry
  //     await axios.patch(
  //       `https://itlearners-f748d-default-rtdb.firebaseio.com/products/${firebaseId}.json`,
  //       { id: firebaseId }
  //     );

  //     // Step 4: Clear form
  //     setData({
  //       course: "",
  //       name: "",
  //       time: "",
  //       student: "",
  //       price: "",
  //       img: ""
  //     });

  //     alert("✅ Course added successfully!");
  //   } catch (err) {
  //     console.error("Error adding course:", err);
  //     alert("Something went wrong.");
  //   }
  // };

  // return (
  //   <div className="auth-container">
  //     <div className="auth-box">
  //       <div className="auth-header">
  //         <h2>Add Course</h2>
  //       </div>

  //       <form className="auth-form" onSubmit={submitHandler}>
  //         <div className="form-group">
  //           <label htmlFor="course">Course Name</label>
  //           <input
  //             onChange={eventHandler}
  //             id="course"
  //             name="course"
  //             value={data.course}
  //             placeholder="Please enter course name"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label htmlFor="name">Tutor Name</label>
  //           <input
  //             onChange={eventHandler}
  //             id="name"
  //             name="name"
  //             value={data.name}
  //             placeholder="Please enter tutor name"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label htmlFor="time">Course Hours</label>
  //           <input
  //             onChange={eventHandler}
  //             id="time"
  //             name="time"
  //             value={data.time}
  //             placeholder="Please enter course duration"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label htmlFor="student">Current Number Of Students</label>
  //           <input
  //             onChange={eventHandler}
  //             id="student"
  //             name="student"
  //             value={data.student}
  //             placeholder="Please enter total students"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label htmlFor="price">Price</label>
  //           <input
  //             onChange={eventHandler}
  //             id="price"
  //             name="price"
  //             value={data.price}
  //             placeholder="Please enter course price"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label htmlFor="img">Image URL</label>
  //           <input
  //             onChange={eventHandler}
  //             id="img"
  //             name="img"
  //             value={data.img}
  //             placeholder="Please provide image URL here"
  //             required
  //           />
  //         </div>

  //         <button type="submit" className="submit-btn">
  //           Add Course
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );


const [data,setData]=useState({
  course:"",
    name: "",
    time: "",
    student: "",
    price: "",
    img: ""
})


const submitHandler=async(E)=>{
   E.preventDefault();
try {
  const res=await axios.post(`https://itlearners-f748d-default-rtdb.firebaseio.com/products.json`,data)
  const firebaseId=res.data.name;

  await axios.patch(`https://itlearners-f748d-default-rtdb.firebaseio.com/products/${firebaseId}.json`,{id:firebaseId})

 
      setData({
        course: "",
        name: "",
        time: "",
        student: "",
        price: "",
        img: ""
      });

      alert("✅ Course added successfully!");
} catch (err) {
  
   console.error("Error adding course:", err);
      alert("Something went wrong.");
}
}

const eventHandler=(E)=>{
  setData({
    ...data,
    [E.target.name]:E.target.value})
}

  return (

      <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Add Course</h2>
        </div>

        <form className="auth-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="course">Course Name</label>
            <input
              onChange={eventHandler}
              id="course"
              name="course"
              value={data.course}
              placeholder="Please enter course name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Tutor Name</label>
            <input
              onChange={eventHandler}
              id="name"
              name="name"
              value={data.name}
              placeholder="Please enter tutor name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Course Hours</label>
            <input
              onChange={eventHandler}
              id="time"
              name="time"
              value={data.time}
              placeholder="Please enter course duration"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="student">Current Number Of Students</label>
            <input
              onChange={eventHandler}
              id="student"
              name="student"
              value={data.student}
              placeholder="Please enter total students"
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
              placeholder="Please enter course price"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="img">Image URL</label>
            <input
              onChange={eventHandler}
              id="img"
              name="img"
              value={data.img}
              placeholder="Please provide image URL here"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Course
          </button>
        </form>
      </div>
    </div>

  )
}

export default AdminMngOd;