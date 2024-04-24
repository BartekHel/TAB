package com.TAB.CarShop;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "dealers")

public class Dealer {
    @Id
    @Column(name = "dealer_id", nullable = false)
    private int dealer_id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "dealer_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "manager_id", referencedColumnName = "dealer_id", nullable = false)
    private Manager manager;

//    @OneToMany(mappedBy = "dealers")
//    private Set<Order> orders;

}
