import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageCategarios() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "https://itlearners-f748d-default-rtdb.firebaseio.com/category.json"
      );

      const mapped = Object.entries(res.data || {}).map(([id, item]) => ({
        id,
        ...item
      }));

      setCategories(mapped);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://itlearners-f748d-default-rtdb.firebaseio.com/category/${id}.json`
      );
      fetchCategories(); // Refresh view after delete
    } catch (err) {
      console.error("Error deleting category:", err);
      alert("Could not delete this category.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Manage Categories</h2>
        </div>

        {categories.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No categories available.
          </p>
        ) : (
          <div className="auth-form">
            {categories.map((item) => (
              <div
                key={item.id}
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
                    src={item.img}
                    alt="Category"
                    style={{
                      width: "80px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "4px"
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p>
                      <strong>Course:</strong> {item.course}
                    </p>
                    <p>
                      <strong>Price:</strong> ₹{item.price}
                    </p>
                  </div>
                  <button
                    className="submit-btn"
                    style={{
                      backgroundColor: "red",
                      marginTop: "0",
                      height: "40px"
                    }}
                    onClick={() => handleDelete(item.id)}
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

export default ManageCategarios;