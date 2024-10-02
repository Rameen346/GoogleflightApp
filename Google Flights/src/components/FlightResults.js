import React from "react";
import FlightCard from "./FlightCard";

const FlightResults = ({ flights }) => {
  if (flights.length === 0) {
    return (
      <p className="text-center text-gray-400">
        No flights found. Try another search.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightResults;
