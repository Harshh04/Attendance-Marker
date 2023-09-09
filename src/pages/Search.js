import React from "react";

const Search = () => {
  return (
    <>
      <h1 className="text-6xl text-center font-semibold mb-12"> Search User</h1>
      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="flex items-center bg-[#1E2A32] rounded-lg p-4">
          <input
            className="bg-[#1E2A32] text-white w-96 p-2 rounded-lg focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <button className="bg-[#1E2A32] text-white p-2 rounded-lg focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14H3l3-3m0 0l3-3m-3 3v6"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Backend User Data */}
      <div className="grid grid-cols-4 gap-4 mt-12">
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">ID :</h1>
          <p className="text-xl">123456789</p>
        </div>
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">Name</h1>
          <p className="text-xl">John Doe</p>
        </div>
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">Email</h1>
          <p className="text-xl"> jhondoe@email.com</p>
        </div>
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">Phone</h1>
          <p className="text-xl">+62 123456789</p>
        </div>
      </div>
    </>
  );
};

export default Search;
