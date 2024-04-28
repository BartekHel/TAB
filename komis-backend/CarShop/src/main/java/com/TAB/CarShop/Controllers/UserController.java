package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Role;
import com.TAB.CarShop.Entities.User;
import com.TAB.CarShop.Repositories.UserRepository;
import com.TAB.CarShop.Requests.AuthRequest;
import com.TAB.CarShop.Requests.RegRequest;
import com.TAB.CarShop.Responses.AuthResponse;
import com.TAB.CarShop.Responses.RegResponse;
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

    @PostMapping("/reg")
    RegResponse registerUser(@RequestBody RegRequest regRequest) {
        if(!userRepository.findByLogin(regRequest.getLogin()).isEmpty()) {
            return new RegResponse(false, "Username already exists");
        }
        if(!userRepository.findByEmail(regRequest.getEmail()).isEmpty()) {
            return new RegResponse(false, "Email already exists");
        }
        try {
            User newUser = new User(regRequest.getLogin(), regRequest.getPassword(), regRequest.getEmail(), regRequest.getName(), regRequest.getSurname());
            newUser = userRepository.saveAndFlush(newUser);
            return new RegResponse(true, "Registration successful");
        } catch (Exception e) {
            return new RegResponse(false, e.getMessage());
        }
    }

    @PostMapping("/login")
    AuthResponse loginUser(@RequestBody AuthRequest authRequest) {
        List<User> user = userRepository.findByLogin(authRequest.getLogin());
        if(user.isEmpty()) {
            return new AuthResponse(false, null);
        }
        if(user.get(0).getPassword().equals(authRequest.getPassword())) {
            return new AuthResponse(true, user.get(0).getRole());
        } else {
            return new AuthResponse(false, null);
        }
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
