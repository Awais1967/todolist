
// import React, { useState, useEffect } from 'react';
// import ClipLoader from "react-spinners/ClipLoader";
// import Test from './components/Test';
// import Todolist from './components/Todolist';
// import Prac from './components/Prac'
// import SplashScreen from './components/SplashScreen';
// import './App.css';
// function App() {
//   const [loading, setLoading] = useState(false)
  
//   useEffect(() => {
//     setLoading(true)
//     setTimeout(() => {
//       setLoading(false)
//     }, 2000) 
//   }, [])

//   return (
//     // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//     //   {loading ? (
//     //     <ClipLoader
//     //       color={'blue'}
//     //       loading={loading}
//     //       size={150}
//     //       aria-label="Loading Spinner"
//     //       data-testid="loader"
//     //       className="m-5"
//     //     />
//     //   ) : (
//     //     <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
//     //       {/* <Todolist/> */}
//     //       {/* <Test/> */}
//     //       <Prac/>
//     //     </div>
//     //   )}
//     // </div>
//     <>
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center"></div>
//     <SplashScreen duration={4000}/>
//      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
//      <Prac/>
//     </div>
    

//     </>
//   );
// }

// export default App;