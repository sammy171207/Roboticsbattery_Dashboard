import { useState } from 'react'
import BatteryLevel from './components/BatteryLevel'
import OperationalStatus from './components/OperationalStatus'
import ActivityLogs from './components/ActivityLogs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <h1>Robot Dashboard</h1>
      <BatteryLevel />
      <OperationalStatus />
      <ActivityLogs />
    </div>
    </>
  )
}

export default App
