package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Dealer;
import com.TAB.CarShop.Repositories.DealerRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/dealer")
public class DealerController {
	private final DealerRepository dealerRepository;

	public DealerController(DealerRepository dealerRepository) {
		this.dealerRepository = dealerRepository;
	}

	@GetMapping
	List<Dealer> getAllDealers() {
		return dealerRepository.findAll();
	}

	@GetMapping("/{id}")
	Dealer getDealerById(@PathVariable Long id) {
		return dealerRepository.findById(id).orElse(null);
	}
}
