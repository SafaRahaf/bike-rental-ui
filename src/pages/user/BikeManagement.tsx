// import { useState, useEffect } from "react";
// import { Table, Button, Input, Space, Select, Card, Modal } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import { useGetBikesQuery } from "../../redux/features/user.api";
// import Loading from "../../components/layout/Loading";

// const BikeManagement = () => {
//   const navigate = useNavigate();
//   const [bikes, setBikes] = useState([]);
//   const [filteredBikes, setFilteredBikes] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [brandFilter, setBrandFilter] = useState<string | undefined>(undefined);
//   const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
//   const [currentBike, setCurrentBike] = useState<any>(null);

//   const { data: bikeData, isLoading, error } = useGetBikesQuery(undefined);

//   useEffect(() => {
//     if (bikeData?.data) {
//       const availableBikes = bikeData.data.filter(
//         (bike: any) => bike.isAvailable
//       );
//       setBikes(availableBikes);
//       setFilteredBikes(availableBikes);
//     }
//   }, [bikeData]);

//   const handleSearch = (value: string) => {
//     setSearchText(value);
//     filterBikes(value, brandFilter);
//   };

//   const handleBrandChange = (value: string | undefined) => {
//     setBrandFilter(value);
//     filterBikes(searchText, value);
//   };

//   const filterBikes = (text: string, brand: string | undefined) => {
//     let filtered = bikes.filter(
//       (bike) =>
//         bike.brand.toLowerCase().includes(text.toLowerCase()) ||
//         bike.model.toLowerCase().includes(text.toLowerCase())
//     );
//     if (brand) {
//       filtered = filtered.filter((bike) => bike.brand === brand);
//     }
//     setFilteredBikes(filtered);
//   };

//   const showBikeDetails = (bike: any) => {
//     setCurrentBike(bike);
//     setIsDetailModalVisible(true);
//   };

//   const columns = [
//     {
//       title: "Brand",
//       dataIndex: "brand",
//       key: "brand",
//     },
//     {
//       title: "Model",
//       dataIndex: "model",
//       key: "model",
//     },
//     {
//       title: "Availability",
//       dataIndex: "isAvailable",
//       key: "isAvailable",
//       render: (text: boolean) => (
//         <span className={text ? "text-green-500" : "text-red-500"}>
//           {text ? "Available" : "Not Available"}
//         </span>
//       ),
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Button
//             className="bg-gradient-to-r to-pink-500 from-cyan-300 text-white"
//             onClick={() => showBikeDetails(record)}
//           >
//             Show Details
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   const getUniqueBrands = () => {
//     const brands = bikes.map((bike) => bike.brand);
//     return Array.from(new Set(brands));
//   };

//   const handleCancel = () => {
//     setIsDetailModalVisible(false);
//     setCurrentBike(null);
//   };

//   if (isLoading) return <Loading />;
//   if (error) return <p>Error loading bikes.</p>;

//   return (
//     <div className="p-6">
//       <Card
//         title="Bike Management"
//         bordered={false}
//         style={{ marginBottom: 20 }}
//       >
//         <div style={{ marginBottom: 16 }} className="flex justify-between">
//           <div>
//             <Input
//               placeholder="Search by brand or model"
//               value={searchText}
//               onChange={(e) => handleSearch(e.target.value)}
//               prefix={<SearchOutlined />}
//               style={{ width: 300, marginRight: 16 }}
//             />
//             <Select
//               placeholder="Filter by brand"
//               style={{ width: 200 }}
//               onChange={handleBrandChange}
//               allowClear
//             >
//               {getUniqueBrands().map((brand) => (
//                 <Select.Option key={brand} value={brand}>
//                   {brand}
//                 </Select.Option>
//               ))}
//             </Select>
//           </div>
//         </div>
//         <Table
//           columns={columns}
//           dataSource={filteredBikes}
//           rowKey="_id"
//           pagination={{ pageSize: 10 }}
//           bordered
//         />
//       </Card>

//       <Modal
//         title="Bike Details"
//         visible={isDetailModalVisible}
//         onCancel={handleCancel}
//         footer={[
//           <Button key="close" onClick={handleCancel}>
//             Close
//           </Button>,
//         ]}
//       >
//         {currentBike && (
//           <div>
//             <p>
//               <strong>Brand:</strong> {currentBike.brand}
//             </p>
//             <p>
//               <strong>Model:</strong> {currentBike.model}
//             </p>
//             <p>
//               <strong>CC:</strong> {currentBike.cc}
//             </p>
//             <p>
//               <strong>Year:</strong> {currentBike.year}
//             </p>
//             <p>
//               <strong>Description:</strong> {currentBike.description}
//             </p>
//             <p>
//               <strong>Availability:</strong>{" "}
//               {currentBike.isAvailable ? "Available" : "Not Available"}
//             </p>
//             <p>
//               <strong>Price Per Hour:</strong> ${currentBike.pricePerHour}
//             </p>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default BikeManagement;

import { useState, useEffect } from "react";
import { Table, Button, Input, Space, Select, Card, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useGetBikesQuery } from "../../redux/features/user.api";
import Loading from "../../components/layout/Loading";

const BikeManagement = () => {
  const navigate = useNavigate();
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [brandFilter, setBrandFilter] = useState<string | undefined>(undefined);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [currentBike, setCurrentBike] = useState<any>(null);

  const { data: bikeData, isLoading, error } = useGetBikesQuery(undefined);

  useEffect(() => {
    if (bikeData?.data) {
      const availableBikes = bikeData.data.filter(
        (bike: any) => bike.isAvailable
      );
      setBikes(availableBikes);
      setFilteredBikes(availableBikes);
    }
  }, [bikeData]);

  const handleSearch = (value: string) => {
    setSearchText(value);
    filterBikes(value, brandFilter);
  };

  const handleBrandChange = (value: string | undefined) => {
    setBrandFilter(value);
    filterBikes(searchText, value);
  };

  const filterBikes = (text: string, brand: string | undefined) => {
    let filtered = bikes.filter(
      (bike) =>
        bike.brand.toLowerCase().includes(text.toLowerCase()) ||
        bike.model.toLowerCase().includes(text.toLowerCase())
    );
    if (brand) {
      filtered = filtered.filter((bike) => bike.brand === brand);
    }
    setFilteredBikes(filtered);
  };

  const showBikeDetails = (bike: any) => {
    setCurrentBike(bike);
    setIsDetailModalVisible(true);
  };

  const columns = [
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      responsive: ["md"],
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Availability",
      dataIndex: "isAvailable",
      key: "isAvailable",
      render: (text: boolean) => (
        <span className={text ? "text-green-500" : "text-red-500"}>
          {text ? "Available" : "Not Available"}
        </span>
      ),
      responsive: ["md"],
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            className="bg-gradient-to-r to-pink-500 from-cyan-300 text-white"
            onClick={() => showBikeDetails(record)}
          >
            Show Details
          </Button>
        </Space>
      ),
    },
  ];

  const getUniqueBrands = () => {
    const brands = bikes.map((bike) => bike.brand);
    return Array.from(new Set(brands));
  };

  const handleCancel = () => {
    setIsDetailModalVisible(false);
    setCurrentBike(null);
  };

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading bikes.</p>;

  return (
    <div className="p-6">
      <Card
        title="Bike Management"
        bordered={false}
        style={{ marginBottom: 20 }}
      >
        <div
          style={{ marginBottom: 16 }}
          className="flex justify-between flex-wrap"
        >
          <div className="w-full sm:w-auto mb-2 sm:mb-0">
            <Input
              placeholder="Search by brand or model"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              prefix={<SearchOutlined />}
              style={{ width: "100%", maxWidth: 300, marginRight: 16 }}
            />
          </div>
          <div className="w-full sm:w-auto">
            <Select
              placeholder="Filter by brand"
              style={{ width: "100%", maxWidth: 200 }}
              onChange={handleBrandChange}
              allowClear
            >
              {getUniqueBrands().map((brand) => (
                <Select.Option key={brand} value={brand}>
                  {brand}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={filteredBikes}
          rowKey="_id"
          pagination={{ pageSize: 10 }}
          bordered
          scroll={{ x: "100%" }}
        />
      </Card>

      <Modal
        title="Bike Details"
        visible={isDetailModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        {currentBike && (
          <div>
            <p>
              <strong>Brand:</strong> {currentBike.brand}
            </p>
            <p>
              <strong>Model:</strong> {currentBike.model}
            </p>
            <p>
              <strong>CC:</strong> {currentBike.cc}
            </p>
            <p>
              <strong>Year:</strong> {currentBike.year}
            </p>
            <p>
              <strong>Description:</strong> {currentBike.description}
            </p>
            <p>
              <strong>Availability:</strong>{" "}
              {currentBike.isAvailable ? "Available" : "Not Available"}
            </p>
            <p>
              <strong>Price Per Hour:</strong> ${currentBike.pricePerHour}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BikeManagement;
