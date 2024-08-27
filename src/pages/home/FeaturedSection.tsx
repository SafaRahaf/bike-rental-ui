import { Button, Card, Col, Row, Modal } from "antd";
import { useState } from "react";
import { useGetBikesQuery } from "../../redux/features/user.api";
import Loading from "../../components/layout/Loading";

const FeaturedSection = () => {
  const { data: bikes, isLoading, error } = useGetBikesQuery(undefined);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedBike, setSelectedBike] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <div>Error loading bikes.</div>;
  }

  const availableBikes = bikes.data.filter((bike: any) => bike.isAvailable);

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const visibleBikes = availableBikes.slice(0, visibleCount);
  const isMoreAvailable = visibleCount < availableBikes.length;

  const showBikeDetails = (bike: any) => {
    setSelectedBike(bike);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedBike(null);
  };

  const handleBookNow = (bike: any) => {
    console.log("Booking bike:", bike);
  };

  return (
    <div className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#72445e]">
          Available Bikes for Rent
        </h2>
        <Row gutter={16}>
          {visibleBikes.map((bike: any) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              key={bike._id}
              className="mb-4 bg-pink-50 "
            >
              <Card
                hoverable
                cover={
                  <img
                    alt={bike.name}
                    src="path-to-placeholder-image.jpg"
                    className="w-full h-40 object-cover"
                  />
                }
              >
                <Card.Meta title={bike.name} description={bike.description} />
                <Button
                  className="bg-cyan-400 mr-2 font-semibold mt-4 text-white"
                  onClick={() => showBikeDetails(bike)}
                >
                  View Details
                </Button>
                <Button
                  className="bg-pink-500  font-semibold mt-4 text-white"
                  onClick={() => handleBookNow(bike)}
                >
                  Book Now
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
        {isMoreAvailable && (
          <Button
            onClick={showMoreItems}
            className="w-full bg-gradient-to-r from-pink-500 to-cyan-300 hover:bg-cyan-900 text-white py-5 font-semibold text-lg mt-8"
          >
            See More
          </Button>
        )}
      </div>

      <Modal
        title={selectedBike?.name}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={600}
      >
        <div>
          <img
            alt={selectedBike?.name}
            src="path-to-placeholder-image.jpg"
            className="w-full h-40 object-cover mb-4"
          />
          <p>
            <strong>Description:</strong> {selectedBike?.description}
          </p>
          <p>
            <strong>Price per Hour:</strong> ${selectedBike?.pricePerHour}
          </p>
          <p>
            <strong>CC:</strong> {selectedBike?.cc}
          </p>
          <p>
            <strong>Year:</strong> {selectedBike?.year}
          </p>
          <p>
            <strong>Model:</strong> {selectedBike?.model}
          </p>
          <p>
            <strong>Brand:</strong> {selectedBike?.brand}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default FeaturedSection;
