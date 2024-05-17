import React, { useState, useEffect } from 'react';

const BatteryLevel = () => {
  const [batteryLevel, setBatteryLevel] = useState('Loading...');

  const fetchBatteryLevel = async () => {
    try {
      const response = await fetch('http://localhost:5080/api/battery');
      const data = await response.json();
      setBatteryLevel(`Battery Level: ${data.level}%`);
    } catch (error) {
      console.error('Error fetching battery level:', error);
      setBatteryLevel('Error loading battery level');
    }
  };

  useEffect(() => {
    fetchBatteryLevel();
  }, []);

  return (
    <div className="card">
      <h2>Battery Level</h2>
      <p>{batteryLevel}</p>
      <button onClick={fetchBatteryLevel}>Refresh</button>
    </div>
  );
};

export default BatteryLevel;
