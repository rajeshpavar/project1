import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function AdminAccount() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({ id: "", name: "", email: "", phone: "" });

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    const uname = localStorage.getItem("uname");
    const uemail = localStorage.getItem("uemail");
    const uphone = localStorage.getItem("uphone");
    const urole = localStorage.getItem("urole");

    if (!uid || urole !== "admin") {
      navigate("/login");
      return;
    }

    setProfile({ id: uid, name: uname || "", email: uemail || "", phone: uphone || "" });
  }, [navigate]);

  const updateRemote = async (updates) => {
    try {
      await axios.patch(`https://itlearners-f748d-default-rtdb.firebaseio.com/admin/${profile.id}.json`, updates);
      await Swal.fire({ icon: "success", title: "Updated", timer: 900, showConfirmButton: false });
      return true;
    } catch (err) {
      console.error("Admin update failed", err);
      Swal.fire({ icon: "error", title: "Update failed", text: "Please try again." });
      return false;
    }
  };

  const handleEditName = async () => {
    const newName = window.prompt("Enter new name", profile.name);
    if (!newName || newName === profile.name) return;
    const ok = await updateRemote({ name: newName });
    if (!ok) return;
    localStorage.setItem("uname", newName);
    setProfile((p) => ({ ...p, name: newName }));
  };

  const handleEditEmail = async () => {
    const newEmail = window.prompt("Enter new email", profile.email);
    if (!newEmail || newEmail === profile.email) return;
    const ok = await updateRemote({ email: newEmail });
    if (!ok) return;
    localStorage.setItem("uemail", newEmail);
    setProfile((p) => ({ ...p, email: newEmail }));
  };

  const handleEditPhone = async () => {
    const newPhone = window.prompt("Enter new phone number", profile.phone);
    if (!newPhone || newPhone === profile.phone) return;
    const ok = await updateRemote({ phone: newPhone });
    if (!ok) return;
    localStorage.setItem("uphone", newPhone);
    setProfile((p) => ({ ...p, phone: newPhone }));
  };

  const handleLogout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("uname");
    localStorage.removeItem("uemail");
    localStorage.removeItem("uphone");
    localStorage.removeItem("urole");
    navigate("/");
  };

  return (
    <div className="container py-5">
      <div className="d-flex align-items-center mb-4">
        <i className="fa fa-user-shield fa-2x text-primary me-2" />
        <h2 className="m-0">Hi, {profile.name || "Admin"}</h2>
      </div>
      <div className="card p-4">
        <div className="mb-3">
          <strong>Admin ID:</strong> {profile.id}
        </div>
        <div className="mb-3 d-flex align-items-center justify-content-between">
          <div>
            <strong>Name:</strong> {profile.name}
          </div>
          <button className="btn btn-sm btn-primary" onClick={handleEditName}>Edit Name</button>
        </div>
        <div className="mb-3 d-flex align-items-center justify-content-between">
          <div>
            <strong>Email:</strong> {profile.email}
          </div>
          <button className="btn btn-sm btn-primary" onClick={handleEditEmail}>Edit Email</button>
        </div>
        <div className="mb-3 d-flex align-items-center justify-content-between">
          <div>
            <strong>Phone:</strong> {profile.phone || "Not set"}
          </div>
          <button className="btn btn-sm btn-primary" onClick={handleEditPhone}>Edit Phone</button>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default AdminAccount;
