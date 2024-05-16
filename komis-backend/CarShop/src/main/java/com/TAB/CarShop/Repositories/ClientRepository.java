package com.TAB.CarShop.Repositories;

import com.TAB.CarShop.Entities.Client;
import com.TAB.CarShop.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    long deleteByUser(User user);
}
