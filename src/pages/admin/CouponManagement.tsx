import { useState } from "react";
import { Table, Button, Modal, Form, Input, message, Space } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface Coupon {
  key: string;
  code: string;
  discount: number;
  expirationDate: string;
}

const initialCoupons: Coupon[] = [
  {
    key: "1",
    code: "SAVE20",
    discount: 20,
    expirationDate: "2024-12-31",
  },
  {
    key: "2",
    code: "WELCOME10",
    discount: 10,
    expirationDate: "2024-11-30",
  },
];

const CouponManagement = () => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCoupon, setCurrentCoupon] = useState<Coupon | null>(null);
  const [form] = Form.useForm();

  const handleAddCoupon = () => {
    setIsModalVisible(true);
    setCurrentCoupon(null);
  };

  const handleEditCoupon = (record: Coupon) => {
    setCurrentCoupon(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDeleteCoupon = (key: string) => {
    setCoupons(coupons.filter((coupon) => coupon.key !== key));
    message.success("Coupon deleted successfully!");
  };

  const handleModalOk = (values: any) => {
    if (currentCoupon) {
      setCoupons(
        coupons.map((coupon) =>
          coupon.key === currentCoupon.key ? { ...coupon, ...values } : coupon
        )
      );
      message.success("Coupon updated successfully!");
    } else {
      setCoupons([
        ...coupons,
        {
          key: `${coupons.length + 1}`,
          ...values,
        },
      ]);
      message.success("Coupon added successfully!");
    }
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Discount (%)",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Expiration Date",
      dataIndex: "expirationDate",
      key: "expirationDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Coupon) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEditCoupon(record)}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteCoupon(record.key)}
            danger
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <Button
        className="bg-gradient-to-r to-pink-500 from-cyan-300 mb-4 text-white p-3"
        icon={<PlusOutlined />}
        onClick={handleAddCoupon}
      >
        Add Coupon
      </Button>
      <Table
        columns={columns}
        scroll={{ x: 600 }}
        dataSource={coupons}
        rowKey="key"
      />

      <Modal
        title={currentCoupon ? "Edit Coupon" : "Add Coupon"}
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleModalCancel}
        okText={currentCoupon ? "Update" : "Add"}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleModalOk}
          initialValues={
            currentCoupon || { code: "", discount: 0, expirationDate: "" }
          }
        >
          <Form.Item
            name="code"
            label="Coupon Code"
            rules={[
              { required: true, message: "Please enter the coupon code!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="discount"
            label="Discount (%)"
            rules={[
              {
                required: true,
                message: "Please enter the discount percentage!",
              },
            ]}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item
            name="expirationDate"
            label="Expiration Date"
            rules={[
              { required: true, message: "Please enter the expiration date!" },
            ]}
          >
            <Input type="date" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CouponManagement;
