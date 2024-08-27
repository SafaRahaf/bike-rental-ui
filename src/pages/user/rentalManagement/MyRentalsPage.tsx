import { useState } from "react";
import { Tabs, Table, Button, message } from "antd";
import {
  useGetRentalBikesQuery,
  useUpdateRentalStatusMutation,
} from "../../../redux/features/user.api";

const MyRentalsPage = () => {
  const { data: rentalData, refetch } = useGetRentalBikesQuery(undefined);
  const [updateRentalStatus] = useUpdateRentalStatusMutation();

  const [activeTab, setActiveTab] = useState("unpaid");

  const paidRentals =
    rentalData?.data?.filter((rental: any) => rental.isReturned) || [];
  const unpaidRentals =
    rentalData?.data?.filter((rental: any) => !rental.isReturned) || [];

  const handlePayment = async (rentalId: string) => {
    try {
      await updateRentalStatus({ id: rentalId, status: true }).unwrap();
      message.success(`Payment successful for rental ${rentalId}!`);
      refetch(); // Update the table data
    } catch (error) {
      message.error("Payment failed. Please try again.");
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

  return (
    <div className="overflow-x-auto">
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
