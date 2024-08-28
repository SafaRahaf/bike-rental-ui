import { useState } from "react";
import { Tabs, Table, Button, message, Modal } from "antd";
import {
  useGetRentalBikesQuery,
  useUpdateRentalStatusMutation,
} from "../../../redux/features/user.api";
import Spinner from "./SpinWheel";
import Loading from "../../../components/layout/Loading";

const MyRentalsPage = () => {
  const {
    data: rentalData,
    refetch,
    isLoading,
  } = useGetRentalBikesQuery(undefined);
  const [updateRentalStatus] = useUpdateRentalStatusMutation();
  const [activeTab, setActiveTab] = useState("unpaid");

  const [isModalVisible, setIsModalVisible] = useState(true);

  const paidRentals =
    rentalData?.data?.filter((rental: any) => rental.isReturned) || [];
  const unpaidRentals =
    rentalData?.data?.filter((rental: any) => !rental.isReturned) || [];

  if (isLoading) {
    return <Loading />;
  }

  const handlePayment = async (rentalId: string) => {
    try {
      const updatedRental = await updateRentalStatus({
        id: rentalId,
        status: true,
      }).unwrap();

      if (updatedRental.data?.isReturned) {
        message.success(`Payment successful for rental ${rentalId}!`);
        refetch();
      } else {
        message.error(`Rental was updated, but the status is still unpaid.`);
      }
    } catch (error) {
      message.error("Payment failed. Please try again.");
      console.error(error?.message);
    }
  };

  const columns = [
    { title: "Bike Id", dataIndex: "bikeId", key: "bikeId" },
    { title: "Start Time", dataIndex: "startTime", key: "startTime" },
    {
      title: "Return Time",
      dataIndex: "returnTime",
      key: "returnTime",
      render: (text: string) => {
        return text ? new Date(text).toLocaleString() : "Not Returned";
      },
    },
    { title: "Total Cost", dataIndex: "totalCost", key: "totalCost" },
  ];

  const unpaidColumns = [
    ...columns,
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Button
          className="bg-[#72445e] text-white"
          onClick={() => handlePayment(record._id)}
        >
          Pay
        </Button>
      ),
    },
  ];

  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="overflow-x-auto">
      <Modal
        title="Spin the Wheel for a Discount!"
        visible={isModalVisible}
        footer={null}
        closable={false}
      >
        <Spinner onSpinComplete={closeModal} />
      </Modal>

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <Tabs.TabPane tab="Unpaid" key="unpaid">
          <Table
            dataSource={unpaidRentals}
            columns={unpaidColumns}
            rowKey="_id"
            scroll={{ x: 600 }}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Paid" key="paid">
          <Table
            dataSource={paidRentals}
            columns={columns}
            rowKey="_id"
            scroll={{ x: 600 }}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default MyRentalsPage;
