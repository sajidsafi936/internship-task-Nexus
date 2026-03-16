// src/pages/meeting/Meetings.tsx
import React from 'react';

const Meetings: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">Meetings</h1>
      <p className="text-gray-500 mb-6">
        Schedule and manage your meetings
      </p>

      {/* Top Section */}
      <div className="grid grid-cols-2 gap-6">

        {/* Calendar Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">March 2024</h2>
          <div className="grid grid-cols-7 gap-2 text-center text-gray-700">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day => (
              <div key={day} className="font-semibold">{day}</div>
            ))}
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`p-2 rounded-full hover:bg-blue-100 cursor-pointer
                  ${i === 13 ? "bg-blue-500 text-white" : ""}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded">
              <div>
                <p className="font-semibold">Ali – Investor</p>
                <p className="text-gray-500 text-sm">12 Mar • 3:00 PM</p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded">
              <div>
                <p className="font-semibold">Sara – Entrepreneur</p>
                <p className="text-gray-500 text-sm">14 Mar • 11:00 AM</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Schedule Meeting Section */}
      <div className="bg-white p-6 rounded-lg shadow mt-8">
        <h2 className="text-xl font-semibold mb-4">Schedule New Meeting</h2>
        <div className="grid grid-cols-3 gap-4">
          <input type="date" className="border p-3 rounded-lg" />
          <input type="time" className="border p-3 rounded-lg" />
          <input type="text" placeholder="Meeting Title" className="border p-3 rounded-lg" />
        </div>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Send Meeting Request
        </button>
      </div>
    </div>
  );
};

export default Meetings;