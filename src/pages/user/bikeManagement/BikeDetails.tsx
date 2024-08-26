const BikeDetails = ({ bike }: any) => {
  if (!bike) {
    return <div>No bike selected.</div>;
  }

  return (
    <div className="mt-8 p-4 border rounded shadow">
      <h2 className="text-2xl font-semibold text-[#72445e] text-center">
        {bike.brand} {bike.model}
      </h2>
      <hr />
      <p>
        <strong>Name:</strong> {bike.name}
      </p>
      <p>
        <strong>Description:</strong> {bike.description}
      </p>
      <p>
        <strong>Price per Hour:</strong> ${bike.pricePerHour}
      </p>
      <p>
        <strong>CC:</strong> {bike.cc}cc
      </p>
      <p>
        <strong>Year:</strong> {bike.year}
      </p>
      <p>
        <strong>Brand:</strong> {bike.brand}
      </p>
      <p>
        <strong>Availability:</strong>{" "}
        {bike.isAvailable ? "Available" : "Not Available"}
      </p>
      <button className="bg-[#72445e] text-white py-2 px-4 rounded mt-4">
        Book Now
      </button>
    </div>
  );
};

export default BikeDetails;
