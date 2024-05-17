import React, { useState, useEffect } from 'react';

const ActivityLogs = () => {
  const [logs, setLogs] = useState(['Loading...']);

  const fetchActivityLogs = async () => {
    try {
      const response = await fetch('http://localhost:5080/api/activity');
      const data = await response.json();
      setLogs(data);
    } catch (error) {
      console.error('Error fetching activity logs:', error);
      setLogs(['Error loading activity logs']);
    }
  };

  useEffect(() => {
    fetchActivityLogs();
  }, []);

  return (
    <div className="card">
      <h2>Activity Logs</h2>
      <ul id="activity-logs">
        {logs.map((log, index) => (
          <li key={index}>
            Description: {log.description}, Timestamp: {log.timestamp}, Duration: {log.duration} mins
          </li>
        ))}
      </ul>
      <button onClick={fetchActivityLogs}>Refresh</button>
    </div>
  );
};

export default ActivityLogs;