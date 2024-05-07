package com.TAB.CarShop.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @Column(name = "order_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int order_id;

    @Column(name = "submission_date", nullable = false)
    private Date submission_date;

    @Column(name = "delivery_date")
    private Date delivery_date;

    @Column(name = "price", nullable = false)
    private double price;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name="client_id", nullable = false)
    private Client client;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "showroom_id", nullable = false)
    private Showroom showroom;

    @OneToOne
    @JoinColumn(name = "vehicle_id", referencedColumnName = "vehicle_id")
    private Vehicle vehicle;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "dealer_id", nullable = false)
    private Dealer dealer;
}
