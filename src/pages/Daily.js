import React from "react";

const Daily = () => {
  return (
    <div>
      <h1 className="text-6xl text-center font-semibold mb-12">
        Daily Attendance Report
      </h1>
      {/* Backend data map */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">Date</h1>
          <p className="text-xl">2021-09-01</p>
        </div>
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">Time</h1>
          <p className="text-xl">08:00:00</p>
        </div>
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">ID :</h1>
          <p className="text-xl">123456789</p>
        </div>
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">Status</h1>
          <p className="text-xl">Present</p>
        </div>
      </div>
    </div>
  );
};

export default Daily;
