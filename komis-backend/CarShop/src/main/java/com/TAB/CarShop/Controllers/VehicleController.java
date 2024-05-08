package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Vehicle;
import com.TAB.CarShop.Repositories.VehicleRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;


@RestController
@RequestMapping("/cars")
public class VehicleController {
    private final VehicleRepository vehicleRepository;

    VehicleController(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    @GetMapping
    List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    @GetMapping("/{id}")
    Vehicle getVehicleById(@PathVariable Integer id) {
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

    @PutMapping("/{id}")
    Vehicle replaceVehicle(@PathVariable Integer id, @RequestBody Vehicle newVehicle) {
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
    void deleteVehicle(@PathVariable Integer id) {
        vehicleRepository.deleteById(id);
    }
}
