package com.TAB.CarShop;

import jakarta.persistence.*;
import lombok.*;
import org.apache.catalina.Manager;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id; //Or Integer instead of int

    @Column(name = "login", nullable = false)
    private String login;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @OneToOne(mappedBy = "users")
    private Client client;

    //@OneToOne(mappedBy = "users")
    //private Dealer dealer;

    //@OneToOne(mappedBy = "users")
    //private Manager manager;

    //@OneToOne(mappedBy = "users")
    //private Repairer repairer
}
