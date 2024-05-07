package com.TAB.CarShop.Entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @JsonManagedReference
    private Set<Dealer> dealers;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "manager")
    @JsonManagedReference
    private Set<Repairer> repairers;
}
