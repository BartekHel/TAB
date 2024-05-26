package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Showroom;
import com.TAB.CarShop.Entities.Vehicle;
import com.TAB.CarShop.Repositories.ShowroomRepository;
import com.TAB.CarShop.Repositories.VehicleRepository;
import com.TAB.CarShop.Requests.VehicleRequest;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/vehicles") //wojtek mi kazal zmienic z "/cars"
public class VehicleController {
	private final VehicleRepository vehicleRepository;
	private final ShowroomRepository showroomRepository;

	VehicleController(VehicleRepository vehicleRepository, ShowroomRepository showroomRepository) {
		this.vehicleRepository = vehicleRepository;
		this.showroomRepository = showroomRepository;
	}

	@GetMapping
	List<Vehicle> getAllVehicles() {
		return vehicleRepository.findAll();
	}

	@GetMapping("/{id}")
	Vehicle getVehicleById(@PathVariable Long id) {
		return vehicleRepository.findById(id).orElse(null);
	}

	@GetMapping("/filtered")
	List<Vehicle> getFilteredAndSortedList(@RequestParam(value = "marka", defaultValue = "") String marka,
	                                       @RequestParam(value = "cenamin", defaultValue = "0") double cenamin,
	                                       @RequestParam(value = "cenamax", defaultValue = "1.7e+308") double cenamax,
	                                       @RequestParam(value = "sortby", defaultValue = "") String sortby) {
		Comparator<Vehicle> comp = switch (sortby) {
			case "marka" -> Comparator.comparing(Vehicle::getBrand);
			case "cenaasc" -> Comparator.comparing(Vehicle::getPrice);
			case "cenadesc" -> Comparator.comparing(Vehicle::getPrice).reversed();

			default -> Comparator.comparing(Vehicle::getPrice).reversed();
		};

		return vehicleRepository.findAll().stream()
				.filter(vehicle -> marka.isBlank() || Objects.equals(vehicle.getBrand(), marka))
				.filter(vehicle -> vehicle.getPrice() >= cenamin)
				.filter(vehicle -> vehicle.getPrice() <= cenamax)

				.sorted(comp).toList();
	}

	@PostMapping()
	Vehicle addVehicle(@RequestBody VehicleRequest vehicleRequest) {
		Showroom showroom = showroomRepository.findById(vehicleRequest.getShowroomId()).orElse(null);
		if (showroom == null) {
			return null;
		}
		Vehicle newVehicle = new Vehicle(vehicleRequest.getBrand(), vehicleRequest.getModel(), vehicleRequest.getModifications(),
				vehicleRequest.getPrice(), showroom);
		return vehicleRepository.saveAndFlush(newVehicle);
	}

	@PutMapping("/{id}")
	Vehicle replaceVehicle(@PathVariable Long id, @RequestBody Vehicle newVehicle) {
		return vehicleRepository.findById(id)
				.map(vehicle -> {
					vehicle.setBrand(newVehicle.getBrand());
					vehicle.setModel(newVehicle.getModel());
					vehicle.setPrice(newVehicle.getPrice());
					vehicle.setOrder(newVehicle.getOrder());
					vehicle.setModifications(newVehicle.getModifications());
					vehicle.setNext_inspection_date(newVehicle.getNext_inspection_date());
					vehicle.setShowroom(newVehicle.getShowroom());
					return vehicleRepository.save(newVehicle);
				})
				.orElseGet(() -> {
					newVehicle.setVehicle_id(id);
					return vehicleRepository.save(newVehicle);
				});
	}

	@DeleteMapping("/{id}")
	void deleteVehicle(@PathVariable Long id) {
		vehicleRepository.deleteById(id);
	}

	@GetMapping("/search")
	List<Vehicle> getSearchedList(@RequestParam(value = "input", defaultValue = "") String input) {
		if (input.isBlank()) {
			return vehicleRepository.findAll();
		}

		Pattern pattern = Pattern.compile(input, Pattern.CASE_INSENSITIVE);

		return vehicleRepository.findAll().stream().filter(vehicle -> {
			Matcher markaMatcher = pattern.matcher(vehicle.getBrand());
			Matcher modelMatcher = pattern.matcher(vehicle.getModel());
			Matcher modelMarkaMatcher = pattern.matcher(vehicle.getModel() + " " + vehicle.getBrand());
			Matcher markaModelMatcher = pattern.matcher(vehicle.getBrand() + " " + vehicle.getModel());
			return markaMatcher.find() || modelMatcher.find() || modelMarkaMatcher.find() || markaModelMatcher.find();
		}).collect(Collectors.toList());
	}
}
