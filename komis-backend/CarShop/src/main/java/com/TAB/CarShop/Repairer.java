package com.TAB.CarShop;

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
    @JoinColumn(name = "user_id", referencedColumnName = "repairer_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "manager_id", referencedColumnName = "repairer_id", nullable = false)
    private Manager manager;

    @OneToOne
    @JoinColumn(name = "service_id", referencedColumnName = "repairer_id", nullable = false)
    private Service service;

    @OneToMany(mappedBy = "repairer")
    private Set<Service> services;
}
