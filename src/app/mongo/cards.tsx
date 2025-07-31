"use client"; // For Next.js 13+ app directory

import React from "react";

interface Property {
  name: string;
  price: string;
  address: string;
}

interface Props {
  data: Property[];
}

const CARD_HEIGHT = 150; // px
const CARD_WIDTH = 800;

const PropertyCards: React.FC<Props> = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",           // vertical scroll
        height: `${CARD_HEIGHT * 2.5}px`,   // fixed height
        width: `${CARD_WIDTH}px`,  
        gap: "16px",
        padding: "16px",
        background: "#ffefd3",
        borderRadius: "12px",
      
      }}
    >
      {data.map((property, idx) => (
        <div
          key={idx}
          style={{
            height: `${CARD_HEIGHT}px`,          // fixed card height
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            backgroundColor: "#034078",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{ margin: "0 0 8px 0" }}>{property.name}</h3>
          <p style={{ margin: "0 0 4px 0" }}>
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
