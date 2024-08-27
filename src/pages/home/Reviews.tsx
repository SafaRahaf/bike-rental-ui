import { Card, Col, Row, Rate } from "antd";
import { ImgR1, ImgR2, ImgR3, ImgR4, ImgR5, ImgR6 } from "../../assets/reviews";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    rating: 5,
    review:
      "Fantastic experience! The bikes were in great condition and the service was excellent.",
    imageUrl: ImgR1,
  },
  {
    id: 2,
    name: "Bob Smith",
    rating: 4,
    review:
      "Good selection of bikes. The rental process was smooth, but the return process could be improved.",
    imageUrl: ImgR2,
  },
  {
    id: 3,
    name: "Charlie Davis",
    rating: 5,
    review:
      "Loved the electric bike! It made my commute so much easier. Highly recommend.",
    imageUrl: ImgR3,
  },
  {
    id: 4,
    name: "Dana Lee",
    rating: 3,
    review:
      "The bike was okay, but the service was not as good as expected. There was a delay in pickup.",
    imageUrl: ImgR4,
  },
  {
    id: 5,
    name: "Sara Niyan",
    rating: 4,
    review:
      "The bike was okay, but the service was not as good as expected. There was a delay in pickup.",
    imageUrl: ImgR5,
  },
  {
    id: 6,
    name: "Noah Raj",
    rating: 2,
    review:
      "The bike was okay, but the service was not as good as expected. There was a delay in pickup.",
    imageUrl: ImgR6,
  },
];

const Reviews = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#72445e]">
          Customer Reviews
        </h2>
        <Row gutter={16} justify="center">
          {reviews.map((review) => (
            <Col xs={24} sm={12} md={8} lg={4} key={review.id} className="mb-4">
              <Card
                className="bg-gradient-to-r from-pink-500 to-cyan-300 text-white p-4 flex flex-col items-center"
                cover={
                  <img
                    alt={review.name}
                    src={review.imageUrl}
                    className="w-24 h-24 object-cover rounded-full mb-4"
                  />
                }
              >
                <Card.Meta
                  title={
                    <div className="flex flex-col items-center">
                      <h3 className="text-lg font-semibold">{review.name}</h3>
                      <Rate disabled value={review.rating} className="mt-1" />
                    </div>
                  }
                  description={
                    <div className="text-center mt-2">{review.review}</div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Reviews;
