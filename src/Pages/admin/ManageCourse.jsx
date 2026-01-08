import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageCourse() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(
        "https://itlearners-f748d-default-rtdb.firebaseio.com/products.json"
      );
      const mapped = Object.entries(res.data || {}).map(([id, item]) => ({
        
        id,
        ...item,
        
        
      }));
      setCourses(mapped);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://itlearners-f748d-default-rtdb.firebaseio.com/products/${id}.json`
      );
      fetchCourses(); // Refresh after deletion
    } catch (err) {
      console.error("Error deleting course:", err);
      alert("Could not delete the course.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Manage Courses</h2>
        </div>

        {courses.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No courses available.
          </p>
        ) : (
          <div className="auth-form">
            {courses.map((course) => (
              <div key={course.id} className="form-group" style={{ borderBottom: "1px solid #ccc", paddingBottom: "12px", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img
                    src={course.img}
                    alt="Course"
                    style={{
                      width: "80px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "4px"
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p><strong>Course:</strong> {course.course}</p>
                    <p><strong>Tutor:</strong> {course.name}</p>
                    <p><strong>Price:</strong> ₹{course.price}</p>
                  </div>
                  <button
                    className="submit-btn"
                    style={{ backgroundColor: "red", marginTop: "0", height: "40px" }}
                    onClick={() => handleDelete(course.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageCourse;