import { useState, useEffect } from "react";
import { Table, Button, Input, Space, Select, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const sampleBikes = [
  { id: 1, brand: "Honda", model: "CBR600", availability: "Available" },
  { id: 2, brand: "Yamaha", model: "MT-07", availability: "Rented" },
];

const BikeManagement = () => {
  const [bikes, setBikes] = useState(sampleBikes);
  const [filteredBikes, setFilteredBikes] = useState(sampleBikes);
  const [searchText, setSearchText] = useState("");
  const [brandFilter, setBrandFilter] = useState<string | undefined>(undefined);

  useEffect(() => {
    setBikes(sampleBikes);
    setFilteredBikes(sampleBikes);
  }, []);

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
      dataIndex: "availability",
      key: "availability",
      render: (text: string) => (
        <span
          className={text === "Available" ? "text-green-500" : "text-red-500"}
        >
          {text}
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
            onClick={() => handleUpdate(record.id)}
          >
            Update
          </Button>
          <Button
            className="bg-gradient-to-r from-pink-500 to-cyan-300 text-white"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleUpdate = (id: number) => {
    // Handle update logic
    console.log("Update bike with id:", id);
  };

  const handleDelete = (id: number) => {
    // Handle delete logic
    console.log("Delete bike with id:", id);
    setBikes(bikes.filter((bike) => bike.id !== id));
    filterBikes(searchText, brandFilter);
  };

  return (
    <div className="p-6">
      <Card
        title="Bike Management"
        bordered={false}
        style={{ marginBottom: 20 }}
      >
        <div style={{ marginBottom: 16 }}>
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
            {/* Add your filter options here */}
            <Select.Option value="Honda">Honda</Select.Option>
            <Select.Option value="Yamaha">Yamaha</Select.Option>
            {/* Add more brands here */}
          </Select>
        </div>
        <Table
          columns={columns}
          dataSource={filteredBikes}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          bordered
        />
      </Card>
    </div>
  );
};

export default BikeManagement;
