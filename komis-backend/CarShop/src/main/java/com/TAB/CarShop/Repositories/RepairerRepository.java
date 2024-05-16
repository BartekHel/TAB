package com.TAB.CarShop.Repositories;

import com.TAB.CarShop.Entities.Manager;
import com.TAB.CarShop.Entities.Repairer;
import com.TAB.CarShop.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepairerRepository extends JpaRepository<Repairer, Long> {
	void deleteByUser(User user);
}
