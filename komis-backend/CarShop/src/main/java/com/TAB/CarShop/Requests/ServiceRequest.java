package com.TAB.CarShop.Requests;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Setter
@Getter
public class ServiceRequest {
    private Long vehicleId;
    private Long repairerId;
    private String description;
    private int year;
    private int month;
    private int day;
    private int hour;
    private int minute;
    private double price;

    ServiceRequest(Long vehicleId, Long repairerId, String description, int year, int month, int day, int hour, int minute, double price) {
        this.vehicleId = vehicleId;
        this.repairerId = repairerId;
        this.description = description;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.price = price;
    }

}
