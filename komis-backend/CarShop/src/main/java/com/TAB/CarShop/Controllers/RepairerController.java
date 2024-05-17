package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Manager;
import com.TAB.CarShop.Entities.Repairer;
import com.TAB.CarShop.Entities.Service;
import com.TAB.CarShop.Entities.User;
import com.TAB.CarShop.Repositories.ManagerRepository;
import com.TAB.CarShop.Repositories.RepairerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/repairer")
public class RepairerController {

	private final RepairerRepository repairerRepository;
	private final ManagerRepository managerRepository;

	public RepairerController(RepairerRepository repairerRepository, ManagerRepository managerRepository) {
		this.repairerRepository = repairerRepository;
		this.managerRepository = managerRepository;
	}

	@GetMapping
	List<Repairer> getAllRepairers() {
		return repairerRepository.findAll();
	}

	@GetMapping("/{id}")
	Repairer getRepairerById(@PathVariable Long id) {
		return repairerRepository.findById(id).orElse(null);
	}

	@GetMapping("/{id}/listservices")
	Set<Service> getRepairerServices(@PathVariable Long id) {
		Repairer repairer = repairerRepository.findById(id).orElse(null);
		if (repairer == null) {
			return null;
		}
		return repairer.getServices();
	}

	@PostMapping("/{id}/setmanager")
	void setManager(@PathVariable long id, @RequestBody long managerId) {
		Repairer repairer = repairerRepository.findById(id).orElse(null);
		if (repairer == null)
			return;
		repairer.setManager(managerRepository.findById(managerId).orElse(null));
		repairerRepository.save(repairer);
	}
}
