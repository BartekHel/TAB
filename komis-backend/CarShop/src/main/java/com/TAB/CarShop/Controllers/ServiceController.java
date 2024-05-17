package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Repairer;
import com.TAB.CarShop.Entities.Service;
import com.TAB.CarShop.Entities.User;
import com.TAB.CarShop.Entities.Vehicle;
import com.TAB.CarShop.Repositories.RepairerRepository;
import com.TAB.CarShop.Repositories.ServiceRepository;
import com.TAB.CarShop.Repositories.VehicleRepository;
import com.TAB.CarShop.Requests.ServiceRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class ServiceController {
    private final ServiceRepository serviceRepository;
    private final VehicleRepository vehicleRepository;
    private final RepairerRepository repairerRepository;

    ServiceController(ServiceRepository serviceRepository, VehicleRepository vehicleRepository, RepairerRepository repairerRepository) {
        this.serviceRepository = serviceRepository;
        this.vehicleRepository = vehicleRepository;
        this.repairerRepository = repairerRepository;
    }

    @GetMapping
    List<Service> getAllServices() {
        return serviceRepository.findAll();
    }

    @GetMapping("/{id}")
    Service getServiceById(@PathVariable Long id) {
        return serviceRepository.findById(id).orElse(null);
    }

    @PostMapping
    Boolean addService(@RequestBody ServiceRequest serviceRequest) {
        try {
            Vehicle vehicle = vehicleRepository.findById(serviceRequest.getVehicleId()).orElse(null);
            Repairer repairer = repairerRepository.findById(serviceRequest.getRepairerId()).orElse(null);
            if (vehicle == null || repairer == null) {
                return false;
            }
            Service newService = new Service(vehicle, repairer, serviceRequest.getDescription(), serviceRequest.getYear(), serviceRequest.getMonth(),
                    serviceRequest.getDay(), serviceRequest.getHour(), serviceRequest.getMinute(), serviceRequest.getPrice());
            serviceRepository.saveAndFlush(newService);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @PutMapping("/{id}")
    Service replaceService(@PathVariable Long id, @RequestBody Service newService) {
        return serviceRepository.findById(id)
                .map(service -> {
                    service.setVehicle_id(newService.getVehicle_id());
                    service.setRepairer(newService.getRepairer());
                    service.setDescription(newService.getDescription());
                    service.setExecution_date(newService.getExecution_date());
                    service.setPrice(newService.getPrice());
                    return serviceRepository.save(service);
                })
                .orElseGet(() -> {
                    newService.setService_id(id);
                    return serviceRepository.save(newService);
                });
    }

    @DeleteMapping("/{id}")
    void deleteService(@PathVariable Long id) {
        serviceRepository.deleteById(id);
    }
}
