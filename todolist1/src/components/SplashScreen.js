import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ duration = 3000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <div className="splash-screen min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="splash-text">TODO List</h1>
    </div>
  );
};

export default SplashScreen;