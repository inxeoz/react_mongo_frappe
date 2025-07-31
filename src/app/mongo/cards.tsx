"use client";

import React from "react";

interface Property {
  name: string;
  price: string;
  address: string;
}

interface Props {
  data: Property[];
}

const CARD_HEIGHT = 150;

const PropertyCards: React.FC<Props> = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        height: `${CARD_HEIGHT * 2.5}px`,
        gap: "16px",
        padding: "16px",
        background: "#ffefd3",
        borderRadius: "12px",
        maxWidth: "90%",
        margin: "0 auto",
      }}
    >
      {data.map((property, idx) => (
        <div
          key={idx}
          style={{
            width: "100%",
            maxWidth: "800px",
            height: `${CARD_HEIGHT}px`,
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#034078",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{ marginBottom: "8px", fontSize: "18px" }}>{property.name}</h3>
          <p style={{ margin: 0 }}>
            <strong>Price:</strong> ${property.price}
          </p>
          <p style={{ margin: 0 }}>
            <strong>Address:</strong> {property.address}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PropertyCards;
