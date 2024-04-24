package com.TAB.CarShop.Repositories;

import com.TAB.CarShop.Entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
