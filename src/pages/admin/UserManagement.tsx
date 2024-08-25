import { useState, useEffect } from "react";
import { Table, Button, Input, Space, Select, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const sampleUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
];

const UserManagement = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [filteredUsers, setFilteredUsers] = useState(sampleUsers);
  const [searchText, setSearchText] = useState("");
  const [roleFilter, setRoleFilter] = useState<string | undefined>(undefined);

  useEffect(() => {
    setUsers(sampleUsers);
    setFilteredUsers(sampleUsers);
  }, []);

  const handleSearch = (value: string) => {
    setSearchText(value);
    filterUsers(value, roleFilter);
  };

  const handleRoleChange = (value: string | undefined) => {
    setRoleFilter(value);
    filterUsers(searchText, value);
  };

  const filterUsers = (text: string, role: string | undefined) => {
    let filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(text.toLowerCase()) ||
        user.email.toLowerCase().includes(text.toLowerCase())
    );
    if (role) {
      filtered = filtered.filter((user) => user.role === role);
    }
    setFilteredUsers(filtered);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            className="bg-gradient-to-r from-pink-500 to-cyan-300 text-white"
            onClick={() => handleUpdate(record.id)}
          >
            Update
          </Button>
          <Button
            className="bg-gradient-to-r to-pink-500 from-cyan-300 text-white"
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
    console.log("Update user with id:", id);
  };

  const handleDelete = (id: number) => {
    // Handle delete logic
    console.log("Delete user with id:", id);
    setUsers(users.filter((user) => user.id !== id));
    filterUsers(searchText, roleFilter);
  };

  return (
    <div className="p-6">
      <Card
        title="User Management"
        bordered={false}
        style={{ marginBottom: 20 }}
      >
        <div style={{ marginBottom: 16 }}>
          <Input
            placeholder="Search by name or email"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            prefix={<SearchOutlined />}
            style={{ width: 300, marginRight: 16 }}
          />
          <Select
            placeholder="Filter by role"
            style={{ width: 200 }}
            onChange={handleRoleChange}
            allowClear
          >
            {/* Add your filter options here */}
            <Select.Option value="Admin">Admin</Select.Option>
            <Select.Option value="User">User</Select.Option>
            {/* Add more roles here */}
          </Select>
        </div>
        <Table
          columns={columns}
          dataSource={filteredUsers}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          bordered
        />
      </Card>
    </div>
  );
};

export default UserManagement;
