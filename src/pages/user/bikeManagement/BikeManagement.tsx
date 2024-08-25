import React, { useState } from "react";
import BikeListing from "./BikeDetails";
import BikeDetails from "./BikeDetails";

const BikeManagement = () => {
  const [selectedBike, setSelectedBike] = useState(null);

  const handleBikeSelect = (bike: any) => {
    setSelectedBike(bike);
  };

  return (
    <div>
      <BikeListing onBikeSelect={handleBikeSelect} />
      {selectedBike && <BikeDetails bike={selectedBike} />}
    </div>
  );
};

export default BikeManagement;
