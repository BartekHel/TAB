package com.TAB.CarShop.Repositories;

import com.TAB.CarShop.Entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
