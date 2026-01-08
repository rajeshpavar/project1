import React from "react";
import { Navigate } from "react-router-dom";

export function RequireAuth({ children }) {
  const uid = typeof window !== "undefined" ? localStorage.getItem("uid") : null;
  if (!uid) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export function RequireAdmin({ children }) {
  const role = typeof window !== "undefined" ? localStorage.getItem("urole") : null;
  const uid = typeof window !== "undefined" ? localStorage.getItem("uid") : null;
  if (!uid || role !== "admin") {
    return <Navigate to="/notFound" replace />;
  }
  return children;
}

export function GuestOnly({ children }) {
  const uid = typeof window !== "undefined" ? localStorage.getItem("uid") : null;
  if (uid) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export function BlockAdminHome({ children }) {
  const role = typeof window !== "undefined" ? localStorage.getItem("urole") : null;
  if (role === "admin") {
    return <Navigate to="/productInfo" replace />;
  }
  return children;
}
