package com.TAB.CarShop;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "managers")

public class Manager {

    @Id
    @Column(name = "manager_id", nullable = false)
    private int manager_id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

    @OneToOne
    @JoinColumn(name = "showroom_id", referencedColumnName = "showroom_id", nullable = false)
    private Showroom showroom;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "manager")
    private Set<Dealer> dealers;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "manager")
    private Set<Repairer> repairers;
}
