package com.example.service;

import java.util.Arrays;
import java.util.List;

import com.example.model.ActivityLog;
import com.example.model.BatteryLevel;
import com.example.model.OperationalStatus;

public class RobotService {
    public BatteryLevel getBatteryLevel() {
        BatteryLevel batteryLevel = new BatteryLevel();
        batteryLevel.setLevel(75); // Simulated value
        return batteryLevel;
    }

    public OperationalStatus getOperationalStatus() {
        OperationalStatus operationalStatus = new OperationalStatus();
        operationalStatus.setStatus("active");
        operationalStatus.setTimestamp("2024-05-16T12:00:00Z"); // Simulated value
        return operationalStatus;
    }

    public List<ActivityLog> getActivityLogs() {
        return Arrays.asList(
            new ActivityLog("Started cleaning", "2024-05-16T10:00:00Z", 30),
            new ActivityLog("Returned to dock", "2024-05-16T10:30:00Z", 10),
            new ActivityLog("Started charging", "2024-05-16T10:40:00Z", 60)
        );
    }
    
}
