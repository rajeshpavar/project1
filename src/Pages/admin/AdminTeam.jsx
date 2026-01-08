import axios from 'axios';
import React, { useState } from 'react';

function AdminTeam() {
  const [data, setData] = useState({
    instructorName: "",
    experience: "",
    studentCount: "",
    designation: "",
    image: ""
  });

  const eventHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ POST instructor data to Firebase
      const res = await axios.post(
        "https://itlearners-f748d-default-rtdb.firebaseio.com/instructor.json",
        data
      );

      // 2️⃣ Get Firebase-generated ID
      const firebaseId = res.data.name;

      // 3️⃣ PATCH the ID into the new instructor entry
      await axios.patch(
        `https://itlearners-f748d-default-rtdb.firebaseio.com/instructor/${firebaseId}.json`,
        { id: firebaseId }
      );

      // 4️⃣ Reset form
      setData({
        instructorName: "",
        experience: "",
        studentCount: "",
        designation: "",
        image: ""
      });

      alert("✅ Instructor added successfully!");
    } catch (err) {
      console.error("Error adding instructor:", err);
      alert("Failed to add instructor.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Add Instructor</h2>
        </div>
        <form className="auth-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="instructorName">Name</label>
            <input
              onChange={eventHandler}
              id="instructorName"
              name="instructorName"
              value={data.instructorName}
              placeholder="Enter instructor name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input
              onChange={eventHandler}
              id="designation"
              name="designation"
              value={data.designation}
              placeholder="Enter instructor role"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience (years)</label>
            <input
              type="number"
              onChange={eventHandler}
              id="experience"
              name="experience"
              value={data.experience}
              placeholder="Years of experience"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="studentCount">Number of Students</label>
            <input
              type="number"
              onChange={eventHandler}
              id="studentCount"
              name="studentCount"
              value={data.studentCount}
              placeholder="Students taught"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              onChange={eventHandler}
              id="image"
              name="image"
              value={data.image}
              placeholder="Paste profile image URL"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Instructor
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminTeam;