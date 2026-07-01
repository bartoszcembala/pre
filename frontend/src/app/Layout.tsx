import React from "react";
import { Link, Outlet } from "react-router-dom";
import LogoutButton from "../features/auth/components/LogoutButton";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <LogoutButton />
      </nav>
      <Outlet />
    </div>
  );
}
