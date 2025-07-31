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
import PropertyCards from "./cards";

const Home: React.FC = async () => {

    const chartres = await fetch('http://localhost:8000/api/method/report_app_frappe.report_app_frappe.api.mongo_chart.get_mongo_chart_data')
    const chartdata = await chartres.json();

    const list_res = await fetch('http://localhost:8000/api/method/report_app_frappe.report_app_frappe.api.mongo_chart.get_airbnb_listing_list')
    const listdata = await list_res.json();
    


  return (
    <main style={{background : "#faf3dd",
         height: 1000
    }
    
    } >
      
      <div
      style={{
        justifyContent: "center",
        alignItems: "center",
    }}
      > 



      <BarChart
        labels={chartdata.message.labels}
        dataValues={chartdata.message.datasets[0].values}
      />

         </div>

      <br></br>

      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}
      > 

      <h1>Properties</h1>
      <PropertyCards data={listdata.message} />
      
         </div>

         
   
      
    </main>
  );
};

export default Home;
