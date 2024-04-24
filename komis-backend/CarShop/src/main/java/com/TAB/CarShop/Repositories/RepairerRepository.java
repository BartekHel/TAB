package com.TAB.CarShop.Repositories;

import com.TAB.CarShop.Entities.Repairer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepairerRepository extends JpaRepository<Repairer, Integer> {
}
