import axios from 'axios';
import React, { useState } from 'react';

function AdminCategories() {
  const [data, setData] = useState({
    img: "",
    course: "",
    time: "",
    student: "",
    price: ""
  });

  const eventHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const FetchData = async () => {
    try {
      await axios.post("https://itlearners-f748d-default-rtdb.firebaseio.com/category.json", data);
      setData({
        img: "",
        course: "",
        time: "",
        student: "",
        price: ""
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    FetchData();
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Add Categories</h2>
        </div>
        <form className="auth-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="course">Course Name</label>
            <input
              onChange={eventHandler}
              id="course"
              name="course"
              value={data.course}
              placeholder="Please enter category name"
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
            <label htmlFor="student">Current Number of Students</label>
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
            <label htmlFor="img">Image</label>
            <input
              onChange={eventHandler}
              id="img"
              name="img"
              value={data.img}
              placeholder="Please provide image URL"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminCategories;