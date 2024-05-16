package com.example.model;

import lombok.Data;

@Data
public class ActivityLog {
    public ActivityLog(String string, String string2, int i) {
        //TODO Auto-generated constructor stub
    }
    private String description;
    private String timestamp;
    private int duration; 
}
