import React from "react";

const login = () => {
  return (
    <div>
      <h1 className="text-6xl text-center font-semibold">Welcome Admin !</h1>
      <div className="grid grid-cols-1 justify-center">
        <div className="flex items-center bg-[#1E2A32] rounded-lg p-4 w-[25%] mx-auto  mt-10">
          <input
            className="bg-[#1E2A32] text-white w-96 p-2 rounded-lg focus:outline-none"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex items-center bg-[#1E2A32] rounded-lg p-4 w-[25%] mx-auto  mt-10">
          <input
            className="bg-[#1E2A32] text-white w-96 p-2 rounded-lg focus:outline-none"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="items-center bg-[#1E2A32] rounded-lg w-[10%] mt-10 text-center mx-auto">
          <button className="bg-[#1E2A32] text-white p-2 rounded-lg focus:outline-none">
            <h3 className="text-2xl font-semibold">Login</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
