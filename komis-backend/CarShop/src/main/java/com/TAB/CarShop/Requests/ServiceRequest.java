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

    ServiceRequest(Long vehicleId, Long repairerId, String description) {
        this.vehicleId = vehicleId;
        this.repairerId = repairerId;
        this.description = description;
    }

}
