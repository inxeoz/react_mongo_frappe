"use client"; // Needed if you are using Next.js 13+ app directory

import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';

interface BarChartProps {
  labels: string[];
  dataValues: number[];
}

const BarChart: React.FC<BarChartProps> = ({ labels, dataValues }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Avg Price (USD)",
        data: dataValues,
        backgroundColor: "#034078",
      },
    ],
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
