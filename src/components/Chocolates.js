import React, { useState, useEffect } from "react";
import { getChocolates, addChocolate } from "../api";
import ChocolateCard from "../components/ChocolateCard";

const Chocolates = () => {
  const [chocolates, setChocolates] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const fetchChocolates = async () => {
      const { data } = await getChocolates();
      setChocolates(data);
    };
    fetchChocolates();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addChocolate(formData);
      setChocolates([...chocolates, data]);
      setFormData({
        name: "",
        quantity: "",
        description: "",
        price: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding chocolate: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter chocolate name"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          placeholder="Enter stock quantity"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          placeholder="Enter description"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          placeholder="Enter price $"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Add image URL"
          onChange={handleChange}
        />
        <button type="submit">Add chocolate</button>
      </form>
      <ul className="chocolates-list">
        {chocolates.map((chocolate) => (
          <ChocolateCard
            key={chocolate._id}
            image={chocolate.image}
            name={chocolate.name}
            quantity={chocolate.quantity}
            description={chocolate.description}
            price={chocolate.price}
          />
          // <li key={chocolate._id}>
          //   <img
          //     src={chocolate.image}
          //     alt={chocolate.name}
          //     className="chocolate-img"
          //   />
          //   <div className="chocolate-info">
          //     <h3>{chocolate.name}</h3>
          //     <p>{chocolate.description}</p>
          //     <p>Qty : {chocolate.quantity}</p>
          //     <p>${chocolate.price}</p>
          //   </div>
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default Chocolates;
