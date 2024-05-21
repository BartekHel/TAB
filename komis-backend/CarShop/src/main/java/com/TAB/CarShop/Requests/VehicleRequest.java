package com.TAB.CarShop.Requests;

import com.TAB.CarShop.Entities.Order;
import com.TAB.CarShop.Entities.Showroom;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class VehicleRequest {
    private String brand;
    private String model;
    private String modifications;
    private double price;
    private long showroomId;

}
