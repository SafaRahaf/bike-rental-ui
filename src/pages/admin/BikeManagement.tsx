import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Input,
  Space,
  Select,
  Card,
  Modal,
  Form,
  message,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useAddBikesMutation } from "../../redux/features/admin.api";
import { useGetBikesQuery } from "../../redux/features/user.api";

const BikeManagement = () => {
  const [form] = Form.useForm();
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [brandFilter, setBrandFilter] = useState<string | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    data: bikeData,
    refetch,
    isLoading,
    error,
  } = useGetBikesQuery(undefined);
  const [addBike, { isLoading: isAdding }] = useAddBikesMutation();

  useEffect(() => {
    if (bikeData && Array.isArray(bikeData.data)) {
      setBikes(bikeData.data);
      setFilteredBikes(bikeData.data);
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

  const handleAddBike = async (values: any) => {
    try {
      await addBike(values).unwrap();
      message.success("Bike added successfully!");
      refetch();
      setIsModalVisible(false);
    } catch (error) {
      message.error("Failed to add bike. Please try again.");
    }
  };

  const columns = [
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
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
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            className="bg-gradient-to-r to-pink-500 from-cyan-300 text-white"
            onClick={() => handleUpdate(record._id)}
          >
            Update
          </Button>
          <Button
            className="bg-gradient-to-r from-pink-500 to-cyan-300 text-white"
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleUpdate = (id: string) => {
    console.log("Update bike with id:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete bike with id:", id);
    setBikes(bikes.filter((bike) => bike._id !== id));
    filterBikes(searchText, brandFilter);
  };

  const showAddBikeModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (isLoading) return <p>Loading bikes...</p>;
  if (error) return <p>Error loading bikes.</p>;

  return (
    <div className="p-6">
      <Card
        title="Bike Management"
        bordered={false}
        style={{ marginBottom: 20 }}
      >
        <div style={{ marginBottom: 16 }} className="flex justify-between">
          <div>
            <Input
              placeholder="Search by brand or model"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              prefix={<SearchOutlined />}
              style={{ width: 300, marginRight: 16 }}
            />
            <Select
              placeholder="Filter by brand"
              style={{ width: 200 }}
              onChange={handleBrandChange}
              allowClear
            >
              <Select.Option value="Honda">Honda</Select.Option>
              <Select.Option value="Yamaha">Yamaha</Select.Option>
            </Select>
          </div>
          <div>
            <Button
              className="bg-[#72445e] text-white mr-1"
              onClick={showAddBikeModal}
            >
              Add bikes
            </Button>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={filteredBikes}
          rowKey="_id"
          pagination={{ pageSize: 10 }}
          bordered
        />
      </Card>

      <Modal
        title="Add New Bike"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddBike}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isAdding}
              className="bg-[#72445e]"
            >
              Add Bike
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BikeManagement;
