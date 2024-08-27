import { useState, useEffect } from "react";
import { Table, Button, Input, Space, Select, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "../../redux/features/admin.api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [roleFilter, setRoleFilter] = useState<string | undefined>(undefined);

  const { data: usersInfoData } = useGetAllUsersQuery(undefined);

  const [updateUserRole] = useUpdateUserRoleMutation();

  useEffect(() => {
    if (usersInfoData?.data) {
      setUsers(usersInfoData.data);
      setFilteredUsers(usersInfoData.data);
    }
  }, [usersInfoData]);

  const handleSearch = (value: string) => {
    setSearchText(value);
    filterUsers(value, roleFilter);
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

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      await updateUserRole({ userId, role: newRole }).unwrap();
      message?.success("Role updated successfully");
    } catch (error) {
      message?.error("Failed to update role");
    }
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
          <Select
            defaultValue={record.role}
            onChange={(value) => handleRoleChange(record._id, value)}
          >
            <Select.Option value="user">User</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
          </Select>
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

  const handleDelete = (id: string) => {
    // Handle delete logic
    console.log("Delete user with id:", id);
    setUsers(users.filter((user) => user._id !== id));
    filterUsers(searchText, roleFilter);
  };

  const getUniqueRoles = () => {
    const roles = users.map((user) => user.role);
    return Array.from(new Set(roles));
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
            {getUniqueRoles().map((role) => (
              <Select.Option key={role} value={role}>
                {role}
              </Select.Option>
            ))}
          </Select>
        </div>
        <Table
          columns={columns}
          dataSource={filteredUsers}
          rowKey="_id"
          pagination={{ pageSize: 10 }}
          scroll={{ x: 600 }}
          bordered
        />
      </Card>
    </div>
  );
};

export default UserManagement;
