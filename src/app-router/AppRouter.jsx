import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="details" element={<Details />} />
          <Route path="login" element={<Login />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="profile" element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="update-blog" element={<UpdateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
