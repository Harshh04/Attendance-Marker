import React from "react";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center  text-7xl font-semibold">Admin Page</h1>
      <p className="text-center  text-2xl mt-5">
        Date : {new Date().toLocaleDateString()}
      </p>
      <p className="text-center  text-2xl mt-2">
        Time : {new Date().toLocaleTimeString()}
      </p>
      <p className="text-center  text-2xl mt-2">
        Welcome Admin, Please select an option from below
      </p>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div
          className="bg-[#5C8374] rounded-lg p-5 hover:bg-slate-600"
          onClick={() => navigate("/add")}
        >
          <h1 className="text-center  text-4xl font-semibold">Add New User</h1>
          <p className="text-center  text-2xl mt-5">
            Add a new user to the database
          </p>
        </div>
        <div
          className="bg-[#5C8374] rounded-lg p-5 hover:bg-slate-600"
          onClick={() => navigate("/search")}
        >
          <h1 className="text-center  text-4xl font-semibold">Search User</h1>
          <p className="text-center  text-2xl mt-5">
            Search for a user in the database
          </p>
        </div>
        <div
          className="bg-[#5C8374] rounded-lg p-5 hover:bg-slate-600 "
          onClick={() => navigate("/verify")}
        >
          <h1 className="text-center  text-4xl font-semibold">
            Verify User Entries
          </h1>
          <p className="text-center  text-2xl mt-5">
            Verify a user's manual entries for unverified entries
          </p>
        </div>
        <div
          className="bg-[#5C8374] rounded-lg p-5 hover:bg-slate-600"
          onClick={() => navigate("/week")}
        >
          <h1 className="text-center  text-4xl font-semibold">Weekly Report</h1>
          <p className="text-center  text-2xl mt-5">
            Show Attendance for the week
          </p>
        </div>
        <div
          className="bg-[#5C8374] rounded-lg p-5 col-span-2 hover:bg-slate-600"
          onClick={() => navigate("/daily")}
        >
          <h1 className="text-center  text-4xl font-semibold">Daily Report</h1>
          <p className="text-center  text-2xl mt-5">
            Todays Attendance and Summary
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
