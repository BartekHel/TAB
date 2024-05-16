package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Manager;
import com.TAB.CarShop.Entities.Role;
import com.TAB.CarShop.Entities.User;
import com.TAB.CarShop.Repositories.ManagerRepository;
import com.TAB.CarShop.Repositories.ShowroomRepository;
import com.TAB.CarShop.Repositories.UserRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/manager")
public class ManagerController {
    private final ManagerRepository managerRepository;
    private final UserRepository userRepository;
    private final ShowroomRepository showroomRepository;

    public ManagerController(ManagerRepository managerRepository, UserRepository userRepository, ShowroomRepository showroomRepository) {
        this.managerRepository = managerRepository;
        this.userRepository = userRepository;
	    this.showroomRepository = showroomRepository;
    }

    @GetMapping("/{id}/employees")
    List<User> getEmployees(@PathVariable long id) {
        Manager manager = managerRepository.findById(id).orElse(null);
        if (manager == null)
            return null;

        return userRepository.findAll().stream().filter(user ->
                (user.getRole() == Role.DEALER && user.getDealer().getManager() == manager)
                        || (user.getRole() == Role.REPAIRER && user.getRepairer().getManager() == manager)
        ).toList();
    }

    @PostMapping("/{id}/setshow")
    void setShowroom(@PathVariable long id, @RequestBody long showroomId) {
        Manager manager = managerRepository.findById(id).orElse(null);
        if (manager == null)
            return;
        manager.setShowroom(showroomRepository.findById(showroomId).orElse(null));
        managerRepository.save(manager);
    }
}
