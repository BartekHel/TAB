package com.TAB.CarShop.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Setter
    @Getter
    @Id
    @Column(name = "vehicle_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vehicle_id;

    @Setter
    @Getter
    @Column(name = "brand", nullable = false)
    private String brand;

    @Setter
    @Getter
    @Column(name = "model", nullable = false)
    private String model;

    @Setter
    @Getter
    @Column(name = "modifications")
    private String modifications;

    @Setter
    @Getter
    @Column(name = "next_inspection_date", nullable = false)
    private Date next_inspection_date;

    @Setter
    @Getter
    @Column(name = "price", nullable = false)
    private double price;

    @Setter
    @Getter
    @OneToOne(mappedBy = "vehicle")
    private Order order;

    @Setter
    @Getter
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "showroom_id", nullable = false)
    private Showroom showroom;
}
