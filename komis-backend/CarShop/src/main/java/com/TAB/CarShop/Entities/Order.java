package com.TAB.CarShop.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @Column(name = "order_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long order_id;

    @Column(name = "submission_date", nullable = false)
    private LocalDate submission_date;

    @Column(name = "delivery_date")
    private LocalDate delivery_date;

    @Column(name = "price", nullable = false)
    private double price;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name="client_id", nullable = false)
    private Client client;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "showroom_id"/*, nullable = false*/)
    private Showroom showroom;

    @OneToOne
    @JoinColumn(name = "vehicle_id", referencedColumnName = "vehicle_id")
    private Vehicle vehicle;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "dealer_id"/*, nullable = false*/)
    private Dealer dealer;

    public Order() {};

    public Order(LocalDate submission_date, LocalDate delivery_date, double price, Client client, Showroom showroom, Vehicle vehicle, Dealer dealer) {
        this.submission_date = submission_date;
        this.delivery_date = delivery_date;
        this.price = price;
        this.client = client;
        this.showroom = showroom;
        this.vehicle = vehicle;
        this.dealer = dealer;
    }
}
