package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Manager;
import com.TAB.CarShop.Entities.Repairer;
import com.TAB.CarShop.Repositories.ManagerRepository;
import com.TAB.CarShop.Repositories.RepairerRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/repairer")
public class RepairerController {

	private final RepairerRepository repairerRepository;
	private final ManagerRepository managerRepository;

	public RepairerController(RepairerRepository repairerRepository, ManagerRepository managerRepository) {
		this.repairerRepository = repairerRepository;
		this.managerRepository = managerRepository;
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
