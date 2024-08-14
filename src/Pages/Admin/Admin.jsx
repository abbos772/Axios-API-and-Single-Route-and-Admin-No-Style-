import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div className="admin">
      <div className="admin_sidebar">
        <div className="btns">
          <Link to={"create"}>
            <button>Create</button>
          </Link>
          <Link to={"manage"}>
            <button>Manage</button>
          </Link>
        </div>
      </div>
      <div className="admin_content">
        <h2>Admin</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
