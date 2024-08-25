const BikeListing = ({ onBikeSelect }) => {
  const bikes = [
    { id: 1, brand: "Yamaha", model: "YZF R1", availability: true },
    { id: 2, brand: "Honda", model: "CBR 600RR", availability: false },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Available Bikes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-medium">
              {bike.brand} {bike.model}
            </h3>
            <p>Available: {bike.availability ? "Yes" : "No"}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
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
