package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.Order;
import com.TAB.CarShop.Repositories.*;
import com.TAB.CarShop.Requests.CreateOrderRequest;
import com.TAB.CarShop.Responses.CreateOrderResponse;
import org.springframework.web.bind.annotation.*;


import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private final OrderRepository orderRepository;
    private final ClientRepository clientRepository;
    private final ShowroomRepository showroomRepository;
    private final VehicleRepository vehicleRepository;
    private final DealerRepository dealerRepository;

    public OrderController(OrderRepository orderRepository, ClientRepository clientRepository, ShowroomRepository showroomRepository, VehicleRepository vehicleRepository, DealerRepository dealerRepository) { this.orderRepository = orderRepository;
        this.clientRepository = clientRepository;
        this.showroomRepository = showroomRepository;
        this.vehicleRepository = vehicleRepository;
        this.dealerRepository = dealerRepository;
    }

    @GetMapping
    List<Order> getAllOrders() {return orderRepository.findAll();}

    @GetMapping("/{id}")
    Order getOrderById(@PathVariable Long id) { return orderRepository.findById(id).orElse(null);}

    @PostMapping("/createorder")
    CreateOrderResponse createOrder(@RequestBody CreateOrderRequest createOrderRequest) {
        try{
            Order newOrder = new Order(
                    LocalDate.now(),
                    null,
                    createOrderRequest.getPrice(),
                    clientRepository.getReferenceById(createOrderRequest.getClient_id()),
                    showroomRepository.findById(createOrderRequest.getShowroom_id()).orElse(null),
                    vehicleRepository.findById(createOrderRequest.getVehicle_id()).orElse(null),
                    dealerRepository.findById(createOrderRequest.getDealer_id()).orElse(null)
            );
            newOrder = orderRepository.saveAndFlush(newOrder);
            return new CreateOrderResponse(true, newOrder.getOrder_id(), "order created successfully");
        }
        catch(Exception e){
            return new CreateOrderResponse(false, 0, e.getMessage());
        }
    }

    @PutMapping("/{id}")
    Order replaceOrder(@PathVariable Long id, @RequestBody Order newOrder) {
        return orderRepository.findById(id)
                .map(order -> {
                    order.setDelivery_date(newOrder.getDelivery_date());
                    order.setPrice(newOrder.getPrice());
                    order.setSubmission_date(newOrder.getSubmission_date());
                    order.setClient(newOrder.getClient());
                    order.setShowroom(newOrder.getShowroom());
                    order.setDealer(newOrder.getDealer());
                    order.setVehicle(newOrder.getVehicle());
                    return orderRepository.save(order);
                })
                .orElseGet(() -> {
                    newOrder.setOrder_id(id);
                    return orderRepository.save(newOrder);
                });

    }

    @DeleteMapping("/{id}")
    void deleteOrderById(@PathVariable Long id) {orderRepository.deleteById(id);}
}
