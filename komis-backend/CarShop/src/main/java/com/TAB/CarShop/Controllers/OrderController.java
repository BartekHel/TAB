package com.TAB.CarShop.Controllers;

import com.TAB.CarShop.Entities.*;
import com.TAB.CarShop.Repositories.*;
import com.TAB.CarShop.Requests.CreateOrderRequest;
import com.TAB.CarShop.Responses.CreateOrderResponse;
import org.springframework.web.bind.annotation.*;


import java.time.DayOfWeek;
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

    LocalDate calculateDeliveryDate(LocalDate submission_date, Showroom showroom, Vehicle vehicle) {
        if(showroom.getShowroom_id() == vehicle.getShowroom().getShowroom_id()) {
            return submission_date;
        }
        LocalDate deliveryDate = submission_date.plusDays(14);
        if(deliveryDate.getDayOfWeek() == DayOfWeek.SATURDAY) {
            deliveryDate.plusDays(2);
        } else if(deliveryDate.getDayOfWeek() == DayOfWeek.SUNDAY) {
            deliveryDate.plusDays(1);
        }
        return deliveryDate;
    }

    @GetMapping
    List<Order> getAllOrders() {return orderRepository.findAll();}

    @GetMapping("/{id}")
    Order getOrderById(@PathVariable Long id) { return orderRepository.findById(id).orElse(null);}

    @PostMapping("/createorder")
    CreateOrderResponse createOrder(@RequestBody CreateOrderRequest createOrderRequest) {
        try{
            Client client = clientRepository.findById(createOrderRequest.getClient_id()).orElse(null);
            Showroom showroom = showroomRepository.findById(createOrderRequest.getShowroom_id()).orElse(null);
            Vehicle vehicle = vehicleRepository.findById(createOrderRequest.getVehicle_id()).orElse(null);
            Dealer dealer = dealerRepository.findById(createOrderRequest.getDealer_id()).orElse(null);
            if(client == null || showroom == null || vehicle == null || dealer == null) {
                return new CreateOrderResponse(false, 0, "Foreign key entity not found");
            }
            if(vehicle.isWas_sold()) {
                return new CreateOrderResponse(false, 0, "This vehicle is already sold");
            }
            Order newOrder = new Order(
                    LocalDate.now(),
                    calculateDeliveryDate(LocalDate.now(), showroom, vehicle),
                    createOrderRequest.getPrice(),
                    client,
                    showroom,
                    vehicle,
                    dealer
            );
            newOrder = orderRepository.saveAndFlush(newOrder);
            vehicle.setWas_sold(true);
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

    @PutMapping("/{id}/setdelivery")
    Order setDeliveryDate(@PathVariable Long id, @RequestBody LocalDate deliveryDate) {
        Order order = orderRepository.findById(id).orElse(null);
        order.setDelivery_date(deliveryDate);
        return order;
    }

    @DeleteMapping("/{id}")
    void deleteOrderById(@PathVariable Long id) {orderRepository.deleteById(id);}
}
