import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

  const services = [
    "Hair Cut",
    "Nails",
    "Facial",
    "Coloring",
    "Spa",
    "Waxing",
    "Makeup",
    "Massage",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    const updatedAppointments = [...savedAppointments, formData];
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    alert("Appointment Booked Successfully!");
    setFormData({
      name: "",
      email: "",
      service: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      {/* Main Container */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 sm:p-10">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Book an Appointment
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Choose a Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
              required
            >
              <option value="" disabled>
                Select a Service
              </option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Select Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Select Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center flex flex-col justify-center items-center gap-3">
          {/* <Link to="/my-appointments"> */}
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300"
            >
              Confirm Appointment
            </button>
            {/* </Link> */}
            <Link to="/my-appointments">
            <button
              type="submit"
              className="bg-blue-500 text-white flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300"
            >
                My Appointments <FaArrowRight />
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const savedAppointments =
//       JSON.parse(localStorage.getItem("appointments")) || [];
//     const updatedAppointments = [...savedAppointments, formData];
//     localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
//     alert("Appointment Booked Successfully!");
//     setFormData({
//       name: "",
//       email: "",
//       service: "",
//       date: "",
//       time: "",
//     });
//   };
  