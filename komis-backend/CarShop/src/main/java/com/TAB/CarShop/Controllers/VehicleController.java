package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Showroom;
import com.TAB.CarShop.Entities.Vehicle;
import com.TAB.CarShop.Repositories.ShowroomRepository;
import com.TAB.CarShop.Repositories.VehicleRepository;
import com.TAB.CarShop.Requests.VehicleRequest;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


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
		List<Vehicle> all = vehicleRepository.findAll();
		return all.stream().filter(car-> !car.isWas_sold()).toList();
	}

	@GetMapping("/{id}")
	Vehicle getVehicleById(@PathVariable Long id) {
		return vehicleRepository.findById(id).orElse(null);
	}

	@GetMapping("/filtered")
	List<Vehicle> getFilteredAndSortedList(@RequestParam(value = "marka", defaultValue = "") String marka,
	                                       @RequestParam(value = "cenamin", defaultValue = "0") double cenamin,
	                                       @RequestParam(value = "cenamax", defaultValue = "1.7e+308") double cenamax,
	                                       @RequestParam(value = "sortby", defaultValue = "") String sortby,
	                                       @RequestParam(value = "input", defaultValue = "") String search) {
		Comparator<Vehicle> comp = switch (sortby) {
			case "marka" -> Comparator.comparing(Vehicle::getBrand);
			case "cenaasc" -> Comparator.comparing(Vehicle::getPrice);
			case "cenadesc" -> Comparator.comparing(Vehicle::getPrice).reversed();

			default -> Comparator.comparing(Vehicle::getPrice).reversed();
		};

		Pattern pattern = Pattern.compile(search, Pattern.CASE_INSENSITIVE);

		return vehicleRepository.findAll().stream()
				.filter(vehicle -> marka.isBlank() || Objects.equals(vehicle.getBrand(), marka))
				.filter(vehicle -> vehicle.getPrice() >= cenamin)
				.filter(vehicle -> vehicle.getPrice() <= cenamax)
				.filter(vehicle -> {
					Matcher markaMatcher = pattern.matcher(vehicle.getBrand());
					Matcher modelMatcher = pattern.matcher(vehicle.getModel());
					Matcher modelMarkaMatcher = pattern.matcher(vehicle.getModel() + " " + vehicle.getBrand());
					Matcher markaModelMatcher = pattern.matcher(vehicle.getBrand() + " " + vehicle.getModel());
					return markaMatcher.find() || modelMatcher.find() || modelMarkaMatcher.find() || markaModelMatcher.find();
				})

				.sorted(comp).toList();
	}

	@GetMapping("/{id}/picture")
	public String getVehicleImage(@PathVariable Long id) {
		try {
			Vehicle vehicle = vehicleRepository.findById(id).orElse(null);
			if (vehicle == null) {
				return "Given car does not exist";
			}
			Path currentRelativePath = Paths.get("");
			String path = currentRelativePath.toAbsolutePath() + "\\CarShop\\Images\\Vehicles\\" + vehicle.getPicture_file_name();

			File file = new File(path);
			BufferedImage image = ImageIO.read(file);

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
			ImageIO.write(image, "png", outputStream);

			byte[] imageBytes = outputStream.toByteArray();
			return Base64.getEncoder().encodeToString(imageBytes);
		} catch (IOException e) {
			return e.getMessage();
		}
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

	@PutMapping("/{id}/changeshowroom")
	Vehicle changeShowroom(@PathVariable Long id, @RequestParam(value = "showroom_id", defaultValue = "0") long showroom_id) {
		Vehicle vehicle = vehicleRepository.findById(id).orElse(null);
		Showroom showroom = showroomRepository.findById(showroom_id).orElse(null);
		if (vehicle == null || showroom == null) return null;
		vehicle.setShowroom(showroom);
		return vehicleRepository.save(vehicle);
	}

	@GetMapping("/{id}/getshowroom")
	Showroom getShowroom(@PathVariable Long id) {
		Vehicle vehicle = vehicleRepository.findById(id).orElse(null);
		if (vehicle == null) return null;
		return vehicle.getShowroom();
	}
}
