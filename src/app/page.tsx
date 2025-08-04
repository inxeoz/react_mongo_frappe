// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <p>
//         HII BRO
//       </p>
//     </div>
//   );
// }


import { generateIframeToken } from './lib/token'

const Demo = () => {

  const token = generateIframeToken('demo-user');

  return (
    <div style={{ color: "black", padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '1rem' }}>Airbnb Report Viewer</h1>

      {/* <iframe
        src={`http://localhost:8000/demo?token=${token}`}
        width="100%"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          minHeight: '600px',
        }}
      /> */}
      

 <iframe
      src="http://localhost:8000/demo" 
        width="100%"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          minHeight: '600px',
        }}
      />
      
    </div>
  );
};

export default Demo;

