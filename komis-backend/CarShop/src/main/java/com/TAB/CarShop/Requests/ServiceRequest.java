package com.TAB.CarShop.Requests;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class ServiceRequest {
    private Long vehicleId;
    private Long repairerId;
    private String description;
    private Date executionDate;
    private double price;

    ServiceRequest(Long vehicleId, Long repairerId, String description, Date executionDate, double price) {
        this.vehicleId = vehicleId;
        this.repairerId = repairerId;
        this.description = description;
        this.executionDate = executionDate;
        this.price = price;
    }

}
