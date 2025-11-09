package com.fleximartx.backend.order.repository;

import com.fleximartx.backend.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
