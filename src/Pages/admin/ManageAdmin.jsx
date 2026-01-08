import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
function ManageAdmin() {
     const [admin, setAdmin] = useState([]);

  const fetchAdmin = async () => {
    try {
      const res = await axios.get(
        "https://itlearners-f748d-default-rtdb.firebaseio.com/admin.json");
      const mapped = Object.entries(res.data || {}).map(([id, item]) => ({
        
        id,
        ...item,
        
        
      }));
      setAdmin(mapped);
    } catch (err) {
      console.error("Error fetching Admin:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://itlearners-f748d-default-rtdb.firebaseio.com/admin/${id}.json`
      );
      fetchAdmin(); // Refresh after deletion
    } catch (err) {
      console.error("Error deleting Admin:", err);
      alert("Could not delete the Admin.");
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Manage Admin</h2>
        </div>

        {admin.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No Admin available.
          </p>
        ) : (
          <div className="auth-form">
            {admin.map((admins) => (
              <div key={admins.id} className="form-group" style={{ borderBottom: "1px solid #ccc", paddingBottom: "12px", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img
                    src={admins.img}
                    alt="admins"
                    style={{
                      width: "80px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "4px"
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p><strong>Id:</strong> {admins.id}</p>
                    <p><strong>Name:<br/></strong> {admins.name}</p>
                    <p><strong>email:
                        <br/></strong>{admins.email}</p>
                  </div>
                  <button
                    className="submit-btn"
                    style={{ backgroundColor: "red", marginTop: "0", height: "40px" }}
                    onClick={() => handleDelete(admins.id)}
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
  )
}

export default ManageAdmin