package com.TAB.CarShop.Requests;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Setter
@Getter
public class ServiceRequest {
    private Long vehicleId;
    private Long repairerId;
    private String description;
    private LocalDate admission_date;
    private double price;

    ServiceRequest(Long vehicleId, Long repairerId, String description, LocalDate admission_date, double price) {
        this.vehicleId = vehicleId;
        this.repairerId = repairerId;
        this.description = description;
        this.admission_date = admission_date;
        this.price = price;
    }

}
