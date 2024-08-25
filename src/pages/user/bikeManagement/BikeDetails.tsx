import React from "react";

const BikeDetails = ({ bike }) => {
  if (!bike) {
    return <div>No bike selected.</div>;
  }

  return (
    <div className="mt-8 p-4 border rounded shadow">
      <h2 className="text-2xl font-semibold">
        {bike.brand} {bike.model}
      </h2>
      <p>
        <strong>Price:</strong> $10,000
      </p>
      <p>
        <strong>CC:</strong> 998cc
      </p>
      <p>
        <strong>Year:</strong> 2023
      </p>
      <p>
        <strong>Brand:</strong> {bike.brand}
      </p>
      <p>
        <strong>Availability:</strong>{" "}
        {bike.availability ? "Available" : "Not Available"}
      </p>
      <button className="bg-green-500 text-white py-2 px-4 rounded mt-4">
        Book Now
      </button>
    </div>
  );
};

export default BikeDetails;
