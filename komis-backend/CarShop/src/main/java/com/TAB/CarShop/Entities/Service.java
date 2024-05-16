package com.TAB.CarShop.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "services")
public class Service {
    @Id
    @Column(name = "service_id", nullable = false)
    private long service_id;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicle_id;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "repairer_id", nullable = false)
    private Repairer repairer;

    @Column(name = "description")
    private String description;

    @Column(name = "execution_date", nullable = false)
    private Date execution_date;

    @Column(name = "price", nullable = false)
    private double price;

    public Service(Vehicle vehicle_id, Repairer repairer, String description, Date execution_date, double price) {
        this.vehicle_id = vehicle_id;
        this.repairer = repairer;
        this.description = description;
        this.execution_date = execution_date;
        this.price = price;
    }

    public Service() {

    }
}
