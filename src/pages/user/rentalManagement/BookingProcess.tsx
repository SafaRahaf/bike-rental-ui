import React, { useState } from "react";
import { Modal, Button, Form, DatePicker, message } from "antd";

const BookingProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePayment = () => {
    message.success("Payment successful! Booking confirmed.");
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button className="bg-[#72445e] text-white" onClick={handleBookNow}>
        Book Now
      </Button>
      <Modal
        title="Booking Process"
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical">
          <Form.Item label="Start Time">
            <DatePicker showTime />
          </Form.Item>
          <Form.Item>
            <Button
              className="bg-gradient-to-r from-pink-500 to-cyan-300"
              onClick={handlePayment}
            >
              Pay Tk 100
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BookingProcess;
