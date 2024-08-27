import React, { useState } from "react";
import { Modal, Button, Form, DatePicker, message } from "antd";
import { useCreateRentalMutation } from "../../../redux/features/user.api";

const BookingProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createRental, { isLoading }] = useCreateRentalMutation();

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePayment = async () => {
    try {
      const rentalData = {
        bikeId: "actualBikeId",
        startTime: new Date().toISOString(),
      };
      await createRental(rentalData).unwrap();
      message.success("Booking confirmed and payment successful!");
      setIsModalOpen(false);
    } catch (error) {
      message.error("Booking failed. Please try again.");
    }
  };

  return (
    <>
      <Button
        className="bg-gradient-to-r to-pink-500 from-cyan-300 text-white"
        onClick={handleBookNow}
      >
        Book Now
      </Button>
      <Modal
        title="Booking Confirmation"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={handlePayment}
          >
            Confirm Booking
          </Button>,
        ]}
      >
        <Form>
          <Form.Item label="Start Time">
            <DatePicker showTime />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default BookingProcess;
