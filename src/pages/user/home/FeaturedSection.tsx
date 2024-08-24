import { Button, Card, Col, Row } from "antd";

const bikes = [
  {
    id: 1,
    name: "Mountain Bike",
    description: "Ideal for off-road trails and rugged terrain.",
    imageUrl: "path-to-mountain-bike-image.jpg",
  },
  {
    id: 2,
    name: "Road Bike",
    description: "Perfect for smooth rides on paved roads.",
    imageUrl: "path-to-road-bike-image.jpg",
  },
  {
    id: 3,
    name: "Hybrid Bike",
    description: "Versatile bike suitable for both city streets.",
    imageUrl: "path-to-hybrid-bike-image.jpg",
  },
  {
    id: 4,
    name: "Electric Bike",
    description: "Effortless rides with electric assistance.",
    imageUrl: "path-to-electric-bike-image.jpg",
  },
];

const FeaturedSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Available Bikes for Rent
        </h2>
        <Row gutter={16}>
          {bikes.map((bike) => (
            <Col xs={24} sm={12} md={8} lg={6} key={bike.id} className="mb-4">
              <Card
                hoverable
                cover={
                  <img
                    alt={bike.name}
                    src={bike.imageUrl}
                    className="w-full h-40 object-cover"
                  />
                }
              >
                <Card.Meta title={bike.name} description={bike.description} />
              </Card>
            </Col>
          ))}
        </Row>
        <Button className="w-full bg-gradient-to-r from-pink-800 to-cyan-900 hover:bg-cyan-900 text-white py-5 font-semibold text-lg">
          See More
        </Button>
      </div>
    </div>
  );
};

export default FeaturedSection;
