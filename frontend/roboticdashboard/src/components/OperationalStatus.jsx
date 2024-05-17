import React, { useState, useEffect } from 'react';

const OperationalStatus = () => {
  const [status, setStatus] = useState('Loading...');

  const fetchOperationalStatus = async () => {
    try {
      const response = await fetch('http://localhost:5080/api/status');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setStatus(`Status: ${data.status}, Timestamp: ${data.timestamp}`);
    } catch (error) {
      console.error('Error fetching operational status:', error);
      setStatus('Error loading operational status');
    }
  };

  useEffect(() => {
    fetchOperationalStatus();
  }, []);

  return (
    <div className="card">
      <h2>Operational Status</h2>
      <p>{status}</p>
      <button onClick={fetchOperationalStatus}>Refresh</button>
    </div>
  );
};

export default OperationalStatus;
