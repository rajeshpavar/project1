import React, { useState, useEffect } from "react";
import axios from "axios";
import EditableCard from "./EditableCard"; // ✅ Adjust the path if needed

const AdminManager = () => {
  const [selectedType, setSelectedType] = useState("products");
  const [dataList, setDataList] = useState([]);

  // Fetch from Firebase
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://itlearners-f748d-default-rtdb.firebaseio.com/${selectedType}.json`
      );
      const mappedData = Object.entries(res.data || {}).map(([id, item]) => ({
        id,
        ...item
      }));
      setDataList(mappedData);
    } catch (err) {
      console.error("Error fetching:", err);
      alert("Something went wrong while fetching data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedType]);

  return (
    <div style={{ padding: "24px" }}>
      <h2>🛠️ Admin Dashboard</h2>

      <label style={{ marginBottom: "8px", display: "block" }}>
        Select data type:
      </label>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          fontSize: "16px"
        }}
      >
        <option value="products">Courses</option>
        <option value="category">Categories</option>
        <option value="instructor">Instructors</option>
      </select>

      {dataList.length === 0 ? (
        <p>📭 No records found for "{selectedType}"</p>
      ) : (
        dataList.map((item) => (
          <EditableCard
            key={item.id}
            item={item}
            type={selectedType}
            onUpdate={fetchData}
            onDelete={fetchData}
          />
        ))
      )}
    </div>
  );
};

export default AdminManager;