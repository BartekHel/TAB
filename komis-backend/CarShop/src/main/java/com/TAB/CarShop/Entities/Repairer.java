package com.TAB.CarShop.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "repairers")
public class Repairer {
    @Id
    @Column(name = "repairer_id", nullable = false)
    private int repairer_id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "manager_id", nullable = false)
    private Manager manager;

    @OneToMany(mappedBy = "repairer")
    private Set<Service> services;
}