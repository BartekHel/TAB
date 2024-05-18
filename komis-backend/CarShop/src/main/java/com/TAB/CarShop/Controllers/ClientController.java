package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Client;
import com.TAB.CarShop.Repositories.ClientRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {
	private final ClientRepository clientRepository;

	public ClientController(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}

	@GetMapping
	List<Client> getAllClients() {
		return clientRepository.findAll();
	}

	@GetMapping("/{id}")
	Client getRepairerById(@PathVariable Long id) {
		return clientRepository.findById(id).orElse(null);
	}
}
