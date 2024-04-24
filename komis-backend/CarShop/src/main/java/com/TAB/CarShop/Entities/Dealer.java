package com.TAB.CarShop.Entities;

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
    private int dealer_id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "manager_id", nullable = false)
    private Manager manager;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "dealer")
    private Set<Order> orders;

}
