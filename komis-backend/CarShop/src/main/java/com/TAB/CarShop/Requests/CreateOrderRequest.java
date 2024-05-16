package com.TAB.CarShop.Requests;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
public class CreateOrderRequest {
    private double price;
    private LocalDate submission_date;
    private Long client_id;
    private Long dealer_id;
    private Long showroom_id;
    private Long vehicle_id;

    public CreateOrderRequest() {}

    public CreateOrderRequest(double price, LocalDate submission_date, Long client_id, Long dealer_id, Long showroom_id, Long vehicle_id) {
        this.price = price;
        this.submission_date = submission_date;
        this.client_id = client_id;
        this.dealer_id = dealer_id;
        this.showroom_id = showroom_id;
        this.vehicle_id = vehicle_id;
    }
}
