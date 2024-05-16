package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.*;
import com.TAB.CarShop.Repositories.*;
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
    private final ClientRepository clientRepository;
    private final DealerRepository dealerRepository;
    private final ManagerRepository managerRepository;
    private final RepairerRepository repairerRepository;

    UserController(UserRepository userRepository, ClientRepository clientRepository, DealerRepository dealerRepository, ManagerRepository managerRepository, RepairerRepository repairerRepository) {
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
        this.dealerRepository = dealerRepository;
        this.managerRepository = managerRepository;
        this.repairerRepository = repairerRepository;
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
            return new RegResponse(false, 0, null, null, "Username already exists");
        }
        if(!userRepository.findByEmail(regRequest.getEmail()).isEmpty()) {
            return new RegResponse(false, 0, null, null, "Email already exists");
        }
        try {
            Role role = Role.valueOf(regRequest.getRole().toUpperCase());
            User newUser = new User(regRequest.getLogin(), regRequest.getPassword(), regRequest.getEmail(), role, regRequest.getName(), regRequest.getSurname());
            newUser = userRepository.saveAndFlush(newUser);

            switch (role) {
                case CLIENT:
                    Client newClient = new Client();
                    newClient.setUser(newUser);
                    clientRepository.saveAndFlush(newClient);
                    break;
                case MANAGER:
                    Manager newManager = new Manager();
                    newManager.setUser(newUser);
                    managerRepository.saveAndFlush(newManager);
                    break;
                case REPAIRER:
                    Repairer newRepairer = new Repairer();
                    newRepairer.setUser(newUser);
                    repairerRepository.saveAndFlush(newRepairer);
                    break;
                case DEALER:
                    Dealer newDealer = new Dealer();
                    newDealer.setUser(newUser);
                    dealerRepository.saveAndFlush(newDealer);
                    break;
                default:
                    return new RegResponse(false, 0, null, null, "Invalid role");
            }


            return new RegResponse(true, newUser.getUser_id(), newUser.getLogin(), newUser.getRole(), "Registration successful");
        } catch (Exception e) {
            return new RegResponse(false, 0, null, null, e.getMessage());
        }
    }

    @PostMapping("/login")
    AuthResponse loginUser(@RequestBody AuthRequest authRequest) {
        List<User> user = userRepository.findByLogin(authRequest.getLogin());
        if(user.isEmpty()) {
            return new AuthResponse(false, 0, null, null);
        }
        if(user.get(0).getPassword().equals(authRequest.getPassword())) {
            return new AuthResponse(true, user.get(0).getUser_id(), user.get(0).getLogin() ,user.get(0).getRole());
        } else {
            return new AuthResponse(false, 0, null, null);
        }
    }

    @PutMapping("/chngrole/{id}")
    User changeRole(@PathVariable Long id, @RequestBody Role role) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return null;
        }
        user.setRole(role);
        switch (role) {
            case CLIENT:
                Client newClient = new Client();
                newClient.setUser(user);
                clientRepository.saveAndFlush(newClient);
                break;
            case MANAGER:
                Manager newManager = new Manager();
                newManager.setUser(user);
                managerRepository.saveAndFlush(newManager);
                break;
            case REPAIRER:
                Repairer newRepairer = new Repairer();
                newRepairer.setUser(user);
                repairerRepository.saveAndFlush(newRepairer);
                break;
            case DEALER:
                Dealer newDealer = new Dealer();
                newDealer.setUser(user);
                dealerRepository.saveAndFlush(newDealer);
                break;
            default:
                System.out.println("Invalid role");
                return null;
        }
        return user;
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
