import { Button, Card, Col, Row } from "antd";
import { useState } from "react";
import { useGetBikesQuery } from "../../redux/features/user.api";

const FeaturedSection = () => {
  const { data: bikes, isLoading, error } = useGetBikesQuery(undefined);
  const [visibleCount, setVisibleCount] = useState(4);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading bikes.</div>;
  }

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const visibleBikes = bikes.data.slice(0, visibleCount);
  const isMoreAvailable = visibleCount < bikes.data.length;

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#72445e]">
          Available Bikes for Rent
        </h2>
        <Row gutter={16}>
          {visibleBikes.map((bike: any) => (
            <Col xs={24} sm={12} md={8} lg={6} key={bike._id} className="mb-4">
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
    </div>
  );
};

export default FeaturedSection;
