package com.TAB.CarShop.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "dealers")

public class Dealer {
    @Id
    @Column(name = "dealer_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long dealer_id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "manager_id")
    private Manager manager;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "dealer")
    @JsonManagedReference
    private Set<Order> orders;

}
