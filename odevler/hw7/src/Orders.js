import React from "react";
import { useState, useEffect } from "react";
import { Modal, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteID, setdeleteID] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getData();
  }, [refresh]);

  const deleteOrder = () => {
    if (deleteID && deleteID > 0) {
      try {
        let requestOptions = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          `https://northwind.vercel.app/api/orders/${deleteID}`,
          requestOptions
        ).then((res) => setRefresh((prev) => !prev));
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  const getData = async () => {
    try {
      let orderData = [];
      await fetch("https://northwind.vercel.app/api/orders")
        .then((res) => res.json())
        .then((data) => (orderData = data));
      const filteredData = orderData.filter(item => item.isActive === "true")
      setOrders(filteredData)
    } catch (error) {
      console.log("Error", error);
    }
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    return (
      newDate.getDay() + "/" + newDate.getMonth() + "/" + newDate.getFullYear()
    );
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
      render: (orderDate) => {
        return formatDate(orderDate);
      },
    },
    {
      title: "Freight",
      dataIndex: "freight",
      key: "freight",
      sorter: (a, b) => a.freight - b.freight,
    },
    {
      title: "Country",
      dataIndex: "shipAddress",
      key: "shipAddress",
      render: (shipAddress) => {
        return shipAddress?.country;
      },
    },
    {
      title: "Delete",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return (
          <DeleteOutlined
            onClick={() => {
              setIsModalVisible(true);
              setdeleteID(id);
            }}
          />
        );
      },
    },
  ];

  const handleOk = () => {
    deleteOrder();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Table columns={columns} dataSource={orders} />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure?</p>
      </Modal>
    </div>
  );
};

export default Orders;
