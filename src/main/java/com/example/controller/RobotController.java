package com.example.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.ActivityLog;
import com.example.model.BatteryLevel;
import com.example.model.OperationalStatus;
import com.example.service.RobotService;
@RestController
@RequestMapping("/api")
public class RobotController {
    private RobotService robotService;
    @GetMapping("/battery")
    public BatteryLevel getBatteryLevel() {
        return robotService.getBatteryLevel();
    }

    @GetMapping("/status")
    public OperationalStatus getOperationalStatus() {
        return robotService.getOperationalStatus();
    }

    @GetMapping("/activity")
    public List<ActivityLog> getActivityLogs() {
        return robotService.getActivityLogs();
    }

    
}
