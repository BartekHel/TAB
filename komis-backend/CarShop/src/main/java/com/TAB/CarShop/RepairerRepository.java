package com.TAB.CarShop;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepairerRepository extends JpaRepository<Repairer, Integer> {
}
