import React from "react";
import BarChart from "./chart";
import PropertyCards from "./cards";
import JsonFilterSearch from "./search";



const Home: React.FC = async () => {
  const chartRes = await fetch("http://localhost:8000/api/method/report_app_frappe.report_app_frappe.api.mongo_chart.get_mongo_chart_data");
  const chartData = await chartRes.json();

  const listRes = await fetch("http://localhost:8000/api/method/report_app_frappe.report_app_frappe.api.mongo_chart.get_airbnb_listing_list");
  const listData = await listRes.json();

  return (
    <main
      style={{
        background: "#faf3dd",
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
      }}
    >
      <section style={{ width: "100%", maxWidth: "900px", textAlign: "center" }}>
        <BarChart
          labels={chartData?.message?.labels || []}
          dataValues={chartData?.message?.datasets?.[0]?.values || []}
        />
      </section>

      <section style={{ width: "100%", maxWidth: "900px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px", fontSize: "28px", color: "#034078" }}>Properties</h1>
        <PropertyCards data={listData?.message || []} />
      </section>

      <section style={{ width: "100%", maxWidth: "900px" }}>
        <JsonFilterSearch />
      </section>
    </main>
  );
};

export default Home;
