import React, { useState } from "react";
import FlightSearchForm from "./components/FlightSearchForm";
import FlightResults from "./components/FlightResults";

function App() {
  const [flights, setFlights] = useState([]);

  const handleSearch = (searchData) => {
    const mockFlights = [
      {
        departureCity: searchData.departureCity,
        arrivalCity: searchData.arrivalCity,
        price: 300,
        airline: "PIA Airline",
        departureTime: "11:00 AM",
        arrivalTime: "2:00 PM",
      },
      {
        departureCity: searchData.departureCity,
        arrivalCity: searchData.arrivalCity,
        price: 550,
        airline: "AIRBLUE Airline",
        departureTime: "2:00 PM",
        arrivalTime: "10:00 PM",
      },
      {
        departureCity: searchData.departureCity,
        arrivalCity: searchData.arrivalCity,
        price: 600,
        airline: "UAE Airline",
        departureTime: "12:00 PM",
        arrivalTime: "11:00 PM",
        button: "button",
      },
    ];

    setFlights(mockFlights);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <FlightSearchForm onSearch={handleSearch} />
      <FlightResults flights={flights} />
    </div>
  );
}

export default App;
