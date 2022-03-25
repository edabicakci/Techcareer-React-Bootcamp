import { Form, Input, Button, Select, Checkbox } from "antd";
import { useState, useEffect } from "react";

const OrderForm = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [order, setOrder] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {}, [refresh]);

  const addOrder = () => {
    const newOrder = { ...order, orderDate: new Date().toString() };
    console.log("newOrder", newOrder);
    try {
      let requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      };
      fetch("https://northwind.vercel.app/api/orders/", requestOptions).then(
        (res) => setRefresh((prev) => !prev)
      );
    } catch (error) {
      console.log("Error", error);
    }
  };

  const onCountryChange = (value) => {
    switch (value) {
      case "Turkey":
        setOrder((prev) => {
          return { ...prev, shipAddress: { country: "Turkey" } };
        });
        return;
      case "USA":
        setOrder((prev) => {
          return { ...prev, shipAddress: { country: "USA" } };
        });
        return;
      case "Japan":
        setOrder((prev) => {
          return { ...prev, shipAddress: { country: "Japan" } };
        });
    }
  };

  const onFinish = () => {
    console.log("order", order);
  };

  const onReset = () => {
    form.resetFields();
  };

  const isActive = (e) => {
      setOrder({...order, isActive: e.target.checked.toString()} )
  }

  return (
    <Form name="control-hooks" onFinish={onFinish}>
      <Form.Item name="customerId" label="Customer ID">
        <Input
          onChange={(e) =>
            setOrder((prev) => {
              return { ...prev, customerId: e.target.value };
            })
          }
        />
      </Form.Item>
      <Form.Item name="freight" label="Freight">
        <Input
          onChange={(e) =>
            setOrder((prev) => {
              return { ...prev, freight: e.target.value };
            })
          }
        />
      </Form.Item>
      <Form.Item name="Country" label="Country">
        <Select
          placeholder="Select a country"
          onChange={onCountryChange}
          allowClear
        >
          <Option value="Turkey">Turkey</Option>
          <Option value="USA">USA</Option>
          <Option value="Japan">Japan</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="active"
        valuePropName="checked"
      >
        <Checkbox onChange = {(e) => isActive(e)}>Active</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={addOrder}>
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
