import React, { useState, useEffect } from "react";
import { createOrder, getOrder } from "../api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    user: "",
    chocolates: "",
    orderType: "",
    totalAmount: "",
    orderStatus: "Pending",
  });

  useEffect(() => {
    const fetchOrder = async () => {
      const { data } = await getOrder();
      setOrders(data);
    };
    fetchOrder();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createOrder(formData);
      setOrders([...orders, data]);
    } catch (error) {
      console.error("Error creating order: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            name="user"
            placeholder="User ID"
            onChange={handleChange}
          />
        </label>
        <label>
          Chocolate IDs:
          <input
            type="text"
            name="chocolates"
            placeholder="Chocolate IDs"
            onChange={handleChange}
          />
        </label>
        <label>
          Order Type:
          <input
            type="radio"
            name="orderType"
            value="Pickup"
            checked={formData.orderType === "Pickup"}
            onChange={handleChange}
          />{" "}
          Pickup
          <input
            type="radio"
            name="orderType"
            value="Delivery"
            checked={formData.orderType === "Delivery"}
            onChange={handleChange}
          />{" "}
          Delivery
        </label>
        <label>
          Total Amount:
          <input
            type="number"
            name="totalAmount"
            placeholder="Total Amount"
            onChange={handleChange}
            value={formData.totalAmount}
            required
          />
        </label>
        <label>
          Order Status:
          <input
            type="radio"
            name="orderStatus"
            value="Pending"
            checked={formData.orderStatus === "Pending"}
            onChange={handleChange}
          />{" "}
          Pending
          <input
            type="radio"
            name="orderStatus"
            value="Done"
            checked={formData.orderStatus === "Done"}
            onChange={handleChange}
          />{" "}
          Done
          <input
            type="radio"
            name="orderStatus"
            value="Cancelled"
            checked={formData.orderStatus === "Cancelled"}
            onChange={handleChange}
          />{" "}
          Cancelled
        </label>
        <button type="submit">Create Order</button>
      </form>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>Order No: {order.orderNo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
