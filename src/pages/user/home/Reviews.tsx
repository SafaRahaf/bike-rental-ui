import { Card, Col, Row, Rate } from "antd";
import React from "react";

// Example reviews data
const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    rating: 5,
    review:
      "Fantastic experience! The bikes were in great condition and the service was excellent.",
    imageUrl: "path-to-customer-image-1.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    rating: 4,
    review:
      "Good selection of bikes. The rental process was smooth, but the return process could be improved.",
    imageUrl: "path-to-customer-image-2.jpg",
  },
  {
    id: 3,
    name: "Charlie Davis",
    rating: 5,
    review:
      "Loved the electric bike! It made my commute so much easier. Highly recommend.",
    imageUrl: "path-to-customer-image-3.jpg",
  },
  {
    id: 4,
    name: "Dana Lee",
    rating: 3,
    review:
      "The bike was okay, but the service was not as good as expected. There was a delay in pickup.",
    imageUrl: "path-to-customer-image-4.jpg",
  },
  {
    id: 5,
    name: "sara niyan",
    rating: 4,
    review:
      "The bike was okay, but the service was not as good as expected. There was a delay in pickup.",
    imageUrl: "path-to-customer-image-4.jpg",
  },
  {
    id: 6,
    name: "noah raj",
    rating: 2,
    review:
      "The bike was okay, but the service was not as good as expected. There was a delay in pickup.",
    imageUrl: "path-to-customer-image-4.jpg",
  },
];

const Reviews = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#72445e]">
          Customer Reviews
        </h2>
        <Row gutter={16}>
          {reviews.map((review) => (
            <Col xs={24} sm={12} md={8} key={review.id} className="mb-4 ">
              <Card
                className="flex items-start bg-gradient-to-r to-pink-500 from-cyan-300 text-white"
                cover={
                  <img
                    alt={review.name}
                    src={review.imageUrl}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                }
              >
                <Card.Meta
                  title={
                    <div className="flex items-center text-white">
                      <h3 className="text-lg font-semibold">{review.name}</h3>
                      <Rate disabled value={review.rating} className="ml-2" />
                    </div>
                  }
                  description={
                    <div className="text-white">{review.review}</div>
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
