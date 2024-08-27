import { useState } from "react";
import { Tabs, Table, Button, message } from "antd";
import { useGetRentalBikesQuery } from "../../../redux/features/user.api";

const MyRentalsPage = () => {
  const { data: rentalData } = useGetRentalBikesQuery(undefined);

  const [activeTab, setActiveTab] = useState("unpaid");

  const paidRentals =
    rentalData?.data?.filter((rental: any) => rental.isReturned) || [];
  const unpaidRentals =
    rentalData?.data?.filter((rental: any) => !rental.isReturned) || [];

  const handlePayment = (rentalId: string) => {
    message.success(`Payment successful for rental ${rentalId}!`);
  };

  const columns = [
    { title: "Bike Name", dataIndex: "bikeName", key: "bikeName" },
    { title: "Start Time", dataIndex: "startTime", key: "startTime" },
    { title: "Return Time", dataIndex: "returnTime", key: "returnTime" },
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
          onClick={() => handlePayment(record.id)}
        >
          Pay
        </Button>
      ),
    },
  ];

  return (
    <Tabs activeKey={activeTab} onChange={setActiveTab}>
      <Tabs.TabPane tab="Unpaid" key="unpaid">
        <Table
          dataSource={unpaidRentals}
          columns={unpaidColumns}
          rowKey="_id"
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Paid" key="paid">
        <Table dataSource={paidRentals} columns={columns} rowKey="_id" />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default MyRentalsPage;
