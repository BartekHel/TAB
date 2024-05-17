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
    private int year;
    private int month;
    private int day;
    private double price;
    private long showroomId;

}
