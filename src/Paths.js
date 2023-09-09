import React from "react";
import { Routes, Route } from "react-router-dom";
import Attendance from "./pages/WeekAttendance";
import Search from "./pages/Search";
import NewEntries from "./pages/AddUser";
import Verify from "./pages/VerifyUser";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import Daily from "./pages/Daily";
import Video from "./pages/Video";

const Paths = () => {
  return (
    <Routes>
      <Route path="/week" element={<Attendance />} />
      <Route path="/search" element={<Search />} />
      <Route path="/new" element={<NewEntries />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/login" element={<Login />} />
      <Route path="/video" element={<Video />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Paths;
