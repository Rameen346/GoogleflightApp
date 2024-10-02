import React from "react";

// Single Flight Card
const FlightCard = ({ flight }) => {
  const {
    departureCity,
    arrivalCity,
    price,
    airline,
    departureTime,
    arrivalTime,
  } = flight;

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105">
      {/* Airline Name */}
      <h3 className="text-2xl font-bold text-blue-800 mb-2">{airline}</h3>

      {/* Flight Route */}
      <p className="text-gray-700 text-lg mb-1">
        <span className="font-medium text-gray-800">From: </span>
        {departureCity}
      </p>
      <p className="text-gray-700 text-lg mb-3">
        <span className="font-medium text-gray-800">To: </span>
        {arrivalCity}
      </p>

      {/* Flight Timings */}
      <div className="flex justify-between items-center text-gray-800 mb-3">
        <div>
          <span className="block text-sm text-gray-500">Departure:</span>
          <span className="font-medium">{departureTime}</span>
        </div>
        <div>
          <span className="block text-sm text-gray-500">Arrival:</span>
          <span className="font-medium">{arrivalTime}</span>
        </div>
      </div>

      {/* Flight Price */}
      <p className="text-xl font-semibold text-green-600 mb-3">${price}</p>

      {/* CTA Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
        Book Now
      </button>
    </div>
  );
};

export default FlightCard;
