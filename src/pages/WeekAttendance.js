import React from "react";

const WeekAttendance = () => {
  return (
    <div>
      <h1 className="text-6xl text-center font-semibold mb-12">
        Weekly Attendance Report
      </h1>
      {/* Backend data map */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">Date</h1>
        </div>
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">Name</h1>
        </div>
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">ID :</h1>
        </div>
        <div className="bg-[#1E2A32] rounded-lg p-4 text-center">
          <h1 className="text-2xl font-semibold">Entries</h1>
        </div>
      </div>
      <div className="bg-[#1E2A32] rounded-lg p-4 text-center mt-8">
        <div className="grid grid-cols-4 gap-4">
          {/* map data from backend */}
          <div>
            <p>15-04-23 to 22-04-23</p>
          </div>
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>123456789</p>
          </div>
          <div>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekAttendance;
