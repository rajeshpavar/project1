import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageTeam() {
  const [instructors, setInstructors] = useState([]);

  const fetchInstructors = async () => {
    try {
      const res = await axios.get(
        "https://itlearners-f748d-default-rtdb.firebaseio.com/instructor.json"
      );
      const mapped = Object.entries(res.data || {}).map(([id, item]) => ({
        id,
        ...item
      }));
      setInstructors(mapped);
    } catch (err) {
      console.error("Error fetching instructors:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://itlearners-f748d-default-rtdb.firebaseio.com/instructor/${id}.json`
      );
      fetchInstructors();
    } catch (err) {
      console.error("Error deleting instructor:", err);
      alert("Failed to delete.");
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Manage Instructors</h2>
        </div>

        {instructors.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No instructors available.
          </p>
        ) : (
          <div className="auth-form">
            {instructors.map((inst) => (
              <div
                key={inst.id}
                className="form-group"
                style={{
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "12px",
                  marginBottom: "12px"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                  }}
                >
                  <img
                    src={inst.image}
                    alt="Instructor"
                    style={{
                      width: "80px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "4px"
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p>
                      <strong>Name:</strong> {inst.instructorName}
                    </p>
                    <p>
                      <strong>Designation:</strong> {inst.designation}
                    </p>
                    <p>
                      <strong>Experience:</strong> {inst.experience} years
                    </p>
                  </div>
                  <button
                    className="submit-btn"
                    style={{
                      backgroundColor: "red",
                      marginTop: "0",
                      height: "40px"
                    }}
                    onClick={() => handleDelete(inst.id)}
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

export default ManageTeam;