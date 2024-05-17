package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Manager;
import com.TAB.CarShop.Entities.Showroom;
import com.TAB.CarShop.Entities.User;
import com.TAB.CarShop.Repositories.ManagerRepository;
import com.TAB.CarShop.Repositories.ShowroomRepository;
import com.TAB.CarShop.Requests.ShowroomRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/showrooms")
public class ShowroomController {
    private final ShowroomRepository showroomRepository;
    private final ManagerRepository managerRepository;

    public ShowroomController(ShowroomRepository showroomRepository, ManagerRepository managerRepository) {
        this.showroomRepository = showroomRepository;
        this.managerRepository = managerRepository;
    }

    @GetMapping
    List<Showroom> getAllShowrooms() {
        return showroomRepository.findAll();
    }

    @GetMapping("/{id}")
    Showroom getShowroomById(@PathVariable Long id) {
        return showroomRepository.findById(id).orElse(null);
    }

    @PostMapping
    Showroom addShowroom(@RequestBody ShowroomRequest showroomRequest) {
        Showroom showroom = new Showroom();
        showroom.setAddress(showroomRequest.getAddress());
        if(showroomRequest.getManagerId() > 0) {
            Manager manager = managerRepository.findById(showroomRequest.getManagerId()).orElse(null);
            if(manager != null) {
                showroom.setManager(manager);
            }
        }
        return showroomRepository.saveAndFlush(showroom);
    }
}
