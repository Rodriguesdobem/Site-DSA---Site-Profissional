package br.com.tendadoozi.backend.controller;

import br.com.tendadoozi.backend.dto.StatusUpdateRequest;
import br.com.tendadoozi.backend.model.Order;
import br.com.tendadoozi.backend.service.InMemoryDataService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final InMemoryDataService service;

    public OrderController(InMemoryDataService service) {
        this.service = service;
    }

    @GetMapping
    public List<Order> list() {
        return service.getOrders();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Order create(@Valid @RequestBody Order order) {
        return service.createOrder(order);
    }

    @PatchMapping("/{id}/status")
    public Order updateStatus(@PathVariable String id, @Valid @RequestBody StatusUpdateRequest request) {
        return service.updateOrderStatus(id, request.status());
    }
}
