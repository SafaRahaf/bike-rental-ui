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
import {
  useAddBikesMutation,
  useDeleteBikesMutation,
  useUpdateBikesMutation,
} from "../../redux/features/admin.api";
import { useGetBikesQuery } from "../../redux/features/user.api";
import { useNavigate } from "react-router-dom";

const BikeManagement = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [brandFilter, setBrandFilter] = useState<string | undefined>(undefined);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [currentBike, setCurrentBike] = useState(null);
  const {
    data: bikeData,
    refetch,
    isLoading,
    error,
  } = useGetBikesQuery(undefined);
  const [addBike, { isLoading: isAdding }] = useAddBikesMutation();
  const [deleteBike] = useDeleteBikesMutation();
  const [updateBike] = useUpdateBikesMutation();

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
    const bikeData = {
      ...values,
      pricePerHour: parseFloat(values.pricePerHour),
      cc: parseInt(values.cc, 10),
      year: parseInt(values.year, 10),
    };

    try {
      await addBike(bikeData).unwrap();
      message.success("Bike added successfully!");
      refetch();
      setIsAddModalVisible(false);
      form.resetFields();
    } catch (error) {
      message.error("Failed to add bike. Please try again.");
    }
    navigate("/admin/bikeManagement");
  };

  const handleUpdateBike = async (values: any) => {
    if (!currentBike?._id) {
      message.error("Bike ID is missing.");
      return;
    }

    const bikeData = {
      ...values,
      pricePerHour: parseFloat(values.pricePerHour),
      cc: parseInt(values.cc, 10),
      year: parseInt(values.year, 10),
    };

    try {
      await updateBike({ id: currentBike._id, data: bikeData }).unwrap();
      message.success("Bike updated successfully!");
      refetch();
      setIsUpdateModalVisible(false);
      setCurrentBike(null);
    } catch (error) {
      message.error("Failed to update bike. Please try again.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBike(id).unwrap();
      message.success("Bike deleted successfully!");
      setBikes(bikes.filter((bike) => bike._id !== id));
      filterBikes(searchText, brandFilter);
    } catch (error) {
      message.error("Failed to delete bike. Please try again.");
    }
  };

  const showUpdateBikeModal = (bike: any) => {
    console.log("Bike data for update:", bike);
    setCurrentBike(bike);
    form.setFieldsValue(bike);
    setIsUpdateModalVisible(true);
  };

  const columns = [
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brands",
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
            onClick={() => showUpdateBikeModal(record)}
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

  const showAddBikeModal = () => {
    setIsAddModalVisible(true);
  };

  const handleCancelAdd = () => {
    setIsAddModalVisible(false);
  };

  const handleCancelUpdate = () => {
    setIsUpdateModalVisible(false);
    setCurrentBike(null);
  };

  const getUniqueBrands = () => {
    const brands = bikes.map((bike) => bike.brand);
    return Array.from(new Set(brands));
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
              {getUniqueBrands().map((brand) => (
                <Select.Option key={brand} value={brand}>
                  {brand}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div>
            <Button
              className="bg-[#72445e] text-white mr-1"
              onClick={showAddBikeModal}
            >
              Add Bike
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
        visible={isAddModalVisible}
        onCancel={handleCancelAdd}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddBike}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter bike name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please enter bike description" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="pricePerHour"
            label="Price Per Hour"
            rules={[{ required: true, message: "Please enter price per hour" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="cc"
            label="CC"
            rules={[{ required: true, message: "Please enter bike CC" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="year"
            label="Year"
            rules={[{ required: true, message: "Please enter bike year" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="model"
            label="Model"
            rules={[{ required: true, message: "Please enter bike model" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="brand"
            label="Brand"
            rules={[{ required: true, message: "Please enter bike brand" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="isAvailable"
            label="Availability"
            rules={[{ required: true, message: "Please select availability" }]}
          >
            <Select>
              <Select.Option value={true}>Available</Select.Option>
              <Select.Option value={false}>Not Available</Select.Option>
            </Select>
          </Form.Item>
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

      <Modal
        title="Update Bike"
        visible={isUpdateModalVisible}
        onCancel={handleCancelUpdate}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleUpdateBike}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter bike name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please enter bike description" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="pricePerHour"
            label="Price Per Hour"
            rules={[{ required: true, message: "Please enter price per hour" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="cc"
            label="CC"
            rules={[{ required: true, message: "Please enter bike CC" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="year"
            label="Year"
            rules={[{ required: true, message: "Please enter bike year" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="model"
            label="Model"
            rules={[{ required: true, message: "Please enter bike model" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="brand"
            label="Brand"
            rules={[{ required: true, message: "Please enter bike brand" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="isAvailable"
            label="Availability"
            rules={[{ required: true, message: "Please select availability" }]}
          >
            <Select>
              <Select.Option value={true}>Available</Select.Option>
              <Select.Option value={false}>Not Available</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isAdding}
              className="bg-[#72445e]"
            >
              Update Bike
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BikeManagement;
