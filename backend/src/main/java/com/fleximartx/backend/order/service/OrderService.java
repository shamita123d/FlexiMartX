package com.fleximartx.backend.order.service;

import com.fleximartx.backend.order.entity.Order;
import com.fleximartx.backend.order.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderRepository repo;
    public OrderService(OrderRepository repo) { this.repo = repo; }

    public List<Order> getAllOrders() { return repo.findAll(); }
    public Order saveOrder(Order order) { return repo.save(order); }
}
