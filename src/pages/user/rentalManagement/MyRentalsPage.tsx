// import { useState } from "react";
// import { Tabs, Table, Button, message } from "antd";
// import { useGetRentalBikesQuery } from "../../../redux/features/user.api";

// const MyRentalsPage = () => {
//   const { data: rentalData } = useGetRentalBikesQuery(undefined);

//   console.log(rentalData);

//   const [activeTab, setActiveTab] = useState("unpaid");

//   const paidRentals = [
//     {
//       id: 1,
//       bikeName: "Yamaha R1",
//       startTime: "2024-08-01 10:00",
//       returnTime: "2024-08-01 18:00",
//       totalCost: "Tk 2000",
//     },
//   ];

//   const unpaidRentals = [
//     {
//       id: 2,
//       bikeName: "Kawasaki Ninja",
//       startTime: "2024-08-02 09:00",
//       returnTime: "2024-08-02 17:00",
//       totalCost: "Tk 1500",
//     },
//   ];

//   const handlePayment = (rentalId: number) => {
//     message.success(`Payment successful for rental ${rentalId}!`);
//   };

//   const columns = [
//     { title: "Bike Name", dataIndex: "bikeName", key: "bikeName" },
//     { title: "Start Time", dataIndex: "startTime", key: "startTime" },
//     { title: "Return Time", dataIndex: "returnTime", key: "returnTime" },
//     { title: "Total Cost", dataIndex: "totalCost", key: "totalCost" },
//   ];

//   const unpaidColumns = [
//     ...columns,
//     {
//       title: "Action",
//       key: "action",
//       render: (_: any, record: any) => (
//         <Button
//           className="bg-[#72445e] text-white"
//           onClick={() => handlePayment(record.id)}
//         >
//           Pay
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <Tabs activeKey={activeTab} onChange={setActiveTab}>
//       <Tabs.TabPane tab="Unpaid" key="unpaid">
//         <Table dataSource={unpaidRentals} columns={unpaidColumns} rowKey="id" />
//       </Tabs.TabPane>
//       <Tabs.TabPane tab="Paid" key="paid">
//         <Table dataSource={paidRentals} columns={columns} rowKey="id" />
//       </Tabs.TabPane>
//     </Tabs>
//   );
// };

// export default MyRentalsPage;

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
    // Here you would handle the payment logic, possibly updating the rental status
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
