package com.TAB.CarShop.Requests;

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
