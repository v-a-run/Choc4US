import React from "react";

const ChocolateCard = (props) => {
  const chocolate = props;
  return (
    <div className="card">
      <img src={chocolate.image} alt={chocolate.name} className="card-img" />
      <div className="card-info">
        <h3>{chocolate.name}</h3>
        <p>{chocolate.description}</p>
        <p>Qty : {chocolate.quantity}</p>
        <p>${chocolate.price}</p>
      </div>
    </div>
  );
};

export default ChocolateCard;
