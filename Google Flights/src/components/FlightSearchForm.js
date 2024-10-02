import React, { useState } from "react";

const FlightSearchForm = ({ onSearch }) => {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ departureCity, arrivalCity, departureDate, returnDate });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4 transform transition-all hover:shadow-xl"
        style={{ backgroundColor: "#f0f4ff" }} 
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Search for Flights
        </h2>
        <p className="text-center text-gray-600 mb-2">
          Enter your details and find the best flights.
        </p>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Departure City */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-1">
              Departure City
            </label>
            <input
              type="text"
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              placeholder="Enter departure city"
              required
            />
          </div>

          {/* Arrival City */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-1">
              Arrival City
            </label>
            <input
              type="text"
              value={arrivalCity}
              onChange={(e) => setArrivalCity(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              placeholder="Enter arrival city"
              required
            />
          </div>
        </div>

        {/* Date Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Departure Date */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-1">
              Departure Date
            </label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              required
            />
          </div>

          {/* Return Date */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-1">
              Return Date
            </label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-transform duration-200 transform hover:scale-105"
          >
            Search Flights
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightSearchForm;
