'use client';

import { useEffect, useRef } from 'react';
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

const data = {
  labels: [
    "Kwun Tong",
    "Shek Kip Mei",
    "Southern District",
    "Kwun Tong District",
    "Mid-Levels",
    "Recreio dos Bandeirantes"
  ],
  datasets: [
    {
      name: "Avg Price (USD)",
      values: [2300.0, 1680.0, 1656.33, 1648.5, 1220.18, 1067.35]
    }
  ]
};

export default function BarChart() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // eslint-disable-next-line no-new
      new Chart(chartRef.current, {
        title: "Average Price by District",
        data,
        type: "bar",
        height: 300,
        colors: ['#5E64FF'],
      });
    }
  }, []);

  return (
    <div>
      <h1>Average Price by District</h1>
      <div ref={chartRef} style={{ width: 700, height: 300 }} />
    </div>
  );
}
