package com.TAB.CarShop;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "clients")
public class Client {

    @Id
    @Column(name = "client_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int client_id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "client")
    private Set<Order> orders;
}
