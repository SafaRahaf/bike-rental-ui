import { useState } from "react";
import BikeListing from "./BikeListing";
import BikeDetails from "./BikeDetails";
import { useGetBikesQuery } from "../../../redux/features/user.api";

const BikeManagement = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  const { data: bikes, isLoading, error } = useGetBikesQuery(undefined);

  const handleBikeSelect = (bike: any) => {
    setSelectedBike(bike);
  };

  return (
    <div>
      <BikeListing
        bikes={bikes}
        isLoading={isLoading}
        error={error}
        onBikeSelect={handleBikeSelect}
      />
      {selectedBike && <BikeDetails bike={selectedBike} />}
    </div>
  );
};

export default BikeManagement;
