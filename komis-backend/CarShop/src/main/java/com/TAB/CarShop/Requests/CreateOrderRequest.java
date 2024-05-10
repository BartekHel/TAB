package com.TAB.CarShop.Requests;

import java.time.LocalDate;
import java.util.Date;

public class CreateOrderRequest {
    private double price;
    private LocalDate submission_date;
    private Long client_id;
    private Long dealer_id;
    private Long showroom_id;
    private Integer vehicle_id;

    public CreateOrderRequest() {}

    public CreateOrderRequest(double price, LocalDate submission_date, Long client_id, Long dealer_id, Long showroom_id, Integer vehicle_id) {
        this.price = price;
        this.submission_date = submission_date;
        this.client_id = client_id;
        this.dealer_id = dealer_id;
        this.showroom_id = showroom_id;
        this.vehicle_id = vehicle_id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public LocalDate getSubmission_date() {
        return submission_date;
    }

    public void setSubmission_date(LocalDate submission_date) {
        this.submission_date = submission_date;
    }

    public Long getClient_id() {
        return client_id;
    }

    public void setClient_id(Long client_id) {
        this.client_id = client_id;
    }

    public Long getDealer_id() {
        return dealer_id;
    }

    public void setDealer_id(Long dealer_id) {
        this.dealer_id = dealer_id;
    }

    public Long getShowroom_id() {
        return showroom_id;
    }

    public void setShowroom_id(Long showroom_id) {
        this.showroom_id = showroom_id;
    }

    public Integer getVehicle_id() {
        return vehicle_id;
    }

    public void setVehicle_id(Integer vehicle_id) {
        this.vehicle_id = vehicle_id;
    }
}
