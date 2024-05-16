package com.TAB.CarShop.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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
    private Date next_inspection_date;

    @Column(name = "price", nullable = false)
    private double price;

    @OneToOne(mappedBy = "vehicle")
    private Order order;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "showroom_id", nullable = false)
    private Showroom showroom;
}
