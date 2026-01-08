import React, { useState, useEffect } from "react";
import axios from "axios";

const EditableCard = ({ item, type, onUpdate, onDelete }) => {
  const [formData, setFormData] = useState({});
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (item) setFormData(item);
  }, [item]);

  const labels = {
    products: {
      courseName: "Course Name",
      tutorName: "Tutor Name",
      courseHours: "Course Hours",
      studentCount: "Current Number Of Students",
      price: "Price",
      image: "Image URL"
    },
    category: {
      courseName: "Course Name",
      courseHours: "Course Hours",
      studentCount: "Current Number Of Students",
      price: "Price",
      image: "Image URL"
    },
    instructor: {
      instructorName: "Instructor Name",
      experience: "Years of Experience",
      studentCount: "Current Number Of Students",
      designation: "Designation",
      image: "Image URL"
    }
  };

  const fieldKeys = labels?.[type] ? Object.keys(labels[type]) : [];

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleUpdate = async () => {
    if (!item?.id || !type) return alert("Missing ID or type for update.");
    try {
      await axios.patch(
        `https://itlearners-f748d-default-rtdb.firebaseio.com/${type}/${item.id}.json`,
        formData
      );
      setEditing(false);
      onUpdate();
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed.");
    }
  };

  const handleDelete = async () => {
    if (!item?.id || !type) return alert("Missing ID or type for deletion.");
    try {
      await axios.delete(
        `https://itlearners-f748d-default-rtdb.firebaseio.com/${type}/${item.id}.json`
      );
      onDelete();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Delete failed.");
    }
  };

  if (fieldKeys.length === 0) {
    return <div style={{ padding: "12px" }}>⚠️ Unknown or invalid data type: <strong>{type}</strong></div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px" }}>
      {fieldKeys.map((key) => (
        <div key={key} style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>
            {labels[type][key]}
          </label>
          <input
            type="text"
            value={formData?.[key] || ""}
            onChange={(e) => handleChange(key, e.target.value)}
            disabled={!isEditing}
            style={{
              padding: "6px",
              width: "100%",
              border: "1px solid #aaa",
              borderRadius: "4px"
            }}
          />
        </div>
      ))}

      <div>
        {isEditing ? (
          <button onClick={handleUpdate} style={{ marginRight: "8px" }}>
            ✅ Save
          </button>
        ) : (
          <button onClick={() => setEditing(true)} style={{ marginRight: "8px" }}>
            ✏️ Edit
          </button>
        )}
        <button onClick={handleDelete}>🗑️ Delete</button>
      </div>
    </div>
  );
};

export default EditableCard;