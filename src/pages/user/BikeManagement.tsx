import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Input,
  Space,
  Select,
  Card,
  Modal,
  message,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  useCreateRentalMutation,
  useGetBikesQuery,
} from "../../redux/features/user.api";
import Loading from "../../components/layout/Loading";

interface Bike {
  _id: string;
  brand: string;
  model: string;
  cc: number;
  year: number;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
}

const BikeManagement = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [filteredBikes, setFilteredBikes] = useState<Bike[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [brandFilter, setBrandFilter] = useState<string | undefined>(undefined);
  const [isDetailModalVisible, setIsDetailModalVisible] =
    useState<boolean>(false);
  const [currentBike, setCurrentBike] = useState<Bike | null>(null);
  const [createRental] = useCreateRentalMutation();

  const { data: bikeData, isLoading, error } = useGetBikesQuery(undefined);

  useEffect(() => {
    if (bikeData?.data) {
      const availableBikes = bikeData.data.filter(
        (bike: Bike) => bike.isAvailable
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

  const handleBookNow = async (bike: Bike) => {
    try {
      await createRental({ bikeId: bike._id, startTime: new Date() }).unwrap();
      message.success("Bike booked successfully! It is now marked as unPaid.");
    } catch (error) {
      message.error("Failed to book the bike. Please try again.");
    }
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

  const showBikeDetails = (bike: Bike) => {
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
      render: (_: any, record: Bike) => (
        <Space size="middle">
          <Button
            className="bg-cyan-400 text-white"
            onClick={() => showBikeDetails(record)}
          >
            Details
          </Button>
          <Button
            className="bg-pink-500 text-white"
            onClick={() => handleBookNow(record)}
          >
            Book
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
          //@ts-ignore
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
