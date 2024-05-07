package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Vehicle;
import com.TAB.CarShop.Repositories.VehicleRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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

}
