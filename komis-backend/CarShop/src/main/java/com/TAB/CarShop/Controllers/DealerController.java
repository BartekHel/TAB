package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Dealer;
import com.TAB.CarShop.Entities.Manager;
import com.TAB.CarShop.Entities.Order;
import com.TAB.CarShop.Repositories.DealerRepository;
import com.TAB.CarShop.Repositories.ManagerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/dealer")
public class DealerController {
	private final DealerRepository dealerRepository;
	private final ManagerRepository managerRepository;

	public DealerController(DealerRepository dealerRepository, ManagerRepository managerRepository) {
		this.dealerRepository = dealerRepository;
		this.managerRepository = managerRepository;
	}

	@GetMapping
	List<Dealer> getAllDealers() {
		return dealerRepository.findAll();
	}

	@GetMapping("/{id}")
	Dealer getDealerById(@PathVariable Long id) {
		return dealerRepository.findById(id).orElse(null);
	}

	@GetMapping("/{id}/listorders")
	Set<Order> listDealerOrders(@PathVariable Long id) {
		Dealer dealer = dealerRepository.findById(id).orElse(null);
		if (dealer == null) return null;
		return dealer.getOrders();
	}

	@PutMapping("/{id}/setmanager/{managerid}")
	Dealer setManager(@PathVariable Long id, @PathVariable Long managerid) {
		Dealer dealer = dealerRepository.findById(id).orElse(null);
		Manager manager = managerRepository.findById(managerid).orElse(null);
		if (dealer == null || manager == null) {
			return null;
		}
		dealer.setManager(manager);
		return dealerRepository.save(dealer);
	}
}
