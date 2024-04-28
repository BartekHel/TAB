package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.User;
import com.TAB.CarShop.Repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository userRepository;

    UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @GetMapping
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElse(null); //to moze byc do poprawy xd
    }

    @PutMapping("/{id}")
    User replaceUser(@PathVariable Long id, @RequestBody User newUser) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setLogin(newUser.getLogin());
                    user.setPassword(newUser.getPassword());
                    user.setEmail(newUser.getEmail());
                    user.setName(newUser.getName());
                    user.setSurname(newUser.getSurname());
                    return userRepository.save(user);
                })
                .orElseGet(() -> {
                    newUser.setUser_id(id);
                    return userRepository.save(newUser);
                });
    }

    @DeleteMapping("/{id}")
    void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
