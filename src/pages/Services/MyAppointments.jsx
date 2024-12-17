import React, { useState, useEffect } from "react";

const MyAppointments = () => {
  // State to store appointments
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetching data from localStorage (simulating saved appointments)
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleDelete = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          My Appointments
        </h2>

        {appointments.length > 0 ? (
          <div className="overflow-x-auto">
            {/* Appointments Table */}
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white text-left">
                  <th className="p-3">#</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Service</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 transition duration-300"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{appointment.name}</td>
                    <td className="p-3">{appointment.email}</td>
                    <td className="p-3">{appointment.service}</td>
                    <td className="p-3">{appointment.date}</td>
                    <td className="p-3">{appointment.time}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg">
            No Appointments Found. Please book an appointment.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
