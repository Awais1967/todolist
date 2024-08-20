
import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Test from './components/Test';
import Todolist from './components/Todolist';
import Prac from './components/Prac'
import SplashScreen from './components/SplashScreen';
import './App.css';
function App() {
  

  return (

    <>
   
    <SplashScreen duration={4000}/>
    <Prac className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl"/>


    </>
  );
}

export default App;