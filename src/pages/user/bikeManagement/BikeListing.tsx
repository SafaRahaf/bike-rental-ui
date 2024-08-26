import React from "react";

const BikeListing = ({ bikes, isLoading, error, onBikeSelect }: any) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching bikes: {error.message}</div>;
  }

  if (!bikes || bikes.length === 0) {
    return <div>No bikes available.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center mt-5 text-[#72445e]">
        Available Bikes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bikes.data.map((bike: any) => (
          <div
            key={bike._id}
            className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-medium">
              {bike.brand} {bike.model}
            </h3>
            <p>Available: {bike.isAvailable ? "Yes" : "No"}</p>
            <button
              className="bg-gradient-to-r to-pink-500 from-cyan-300 text-white py-2 px-4 rounded mt-4"
              onClick={() => onBikeSelect(bike)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeListing;
