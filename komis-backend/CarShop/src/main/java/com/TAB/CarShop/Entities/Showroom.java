package com.TAB.CarShop.Entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "showrooms")
public class Showroom {

    @Id
    @Column(name = "showroom_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int showroom_id;

    @Column(name = "address", nullable = false)
    private String address;

    @OneToMany(mappedBy = "showroom")
    @JsonManagedReference
    private Set<Order> orders;

    @OneToMany(mappedBy = "showroom")
    @JsonManagedReference
    private Set<Vehicle> vehicles;

    @OneToOne(mappedBy = "showroom")
    private Manager manager;
}
