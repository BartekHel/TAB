package com.TAB.CarShop.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Setter
@Getter
@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @Column(name = "vehicle_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long vehicle_id;

    @Column(name = "brand", nullable = false)
    private String brand;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "modifications")
    private String modifications;

    @Column(name = "next_inspection_date", nullable = false)
    private LocalDate next_inspection_date;

    @Column(name = "price", nullable = false)
    private double price;

    @JsonIgnore
    @OneToOne(mappedBy = "vehicle")
    private Order order;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "showroom_id")
    private Showroom showroom;

    public Vehicle() {}

    public Vehicle(String brand, String model, String modifications, int year, int month, int day, double price, Showroom showroom) {
        this.brand = brand;
        this.model = model;
        this.modifications = modifications;
        this.next_inspection_date = LocalDate.of(year, month, day);
        this.price = price;
        this.showroom = showroom;
    }
}
