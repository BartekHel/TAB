package com.TAB.CarShop.Requests;

import java.util.Date;

public class ServiceRequest {
    private int vehicleId;
    private int repairerId;
    private String description;
    private Date executionDate;
    private double price;

    ServiceRequest(int vehicleId, int repairerId, String description, Date executionDate, double price) {
        this.vehicleId = vehicleId;
        this.repairerId = repairerId;
        this.description = description;
        this.executionDate = executionDate;
        this.price = price;
    }

    public int getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(int vehicleId) {
        this.vehicleId = vehicleId;
    }

    public int getRepairerId() {
        return repairerId;
    }

    public void setRepairerId(int repairerId) {
        this.repairerId = repairerId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getExecutionDate() {
        return executionDate;
    }

    public void setExecutionDate(Date executionDate) {
        this.executionDate = executionDate;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
