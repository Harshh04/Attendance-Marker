import React from "react";

const AddUser = () => {
  return (
    <div>
      <h1 className="text-6xl text-center font-semibold mb-12"> Add User</h1>
      {/* fetch image from backend */}

      {/* taking inputs from admin */}
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#040D12] text-white p-2 rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Email"
          className="bg-[#040D12] text-white p-2 rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="ID"
          className="bg-[#040D12] text-white p-2 rounded-md mb-4"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="bg-[#040D12] text-white p-2 rounded-md mb-4"
        />
        <button className="bg-[#5C8374] text-white p-2 rounded-md mb-4 hover:bg-slate-400">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
