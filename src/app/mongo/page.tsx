// export default async function MyPage() {
//   const res = await fetch('http://localhost:8000/api/method/report_app_frappe.report_app_frappe.api.mongo_chart.demofunc');
//   const data = await res.json();

//   return (
//     <div>
//       <h1>Data from API</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }


import React from "react";
import BarChart from "./chart"
// const data = {
//   message: {
//     labels: [
//       "Kwun Tong",
//       "Shek Kip Mei",
//       "Southern District",
//       "Kwun Tong District",
//       "Mid-Levels",
//       "Recreio dos Bandeirantes",
//     ],
//     datasets: [
//       {
//         name: "Avg Price (USD)",
//         values: [2300.0, 1680.0, 1656.33, 1648.5, 1220.18, 1067.35],
//       },
//     ],
//   },


// };

const Home: React.FC = async () => {

    const res = await fetch('http://localhost:8000/api/method/report_app_frappe.report_app_frappe.api.mongo_chart.get_mongo_chart_data')
    const data = await res.json();
    


  return (
    <main>
      
      <BarChart
        labels={data.message.labels}
        dataValues={data.message.datasets[0].values}
      />
    </main>
  );
};

export default Home;
