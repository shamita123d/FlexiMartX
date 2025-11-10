package com.fleximartx.order_service.service;

import com.fleximartx.order_service.model.Order;
import com.fleximartx.order_service.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;

import java.util.*;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final RestTemplate restTemplate;

    @Value("${cart.service.url}")
    private String cartServiceUrl;

    @Value("${product.service.url}")
    private String productServiceUrl;

    public OrderService(OrderRepository orderRepository, RestTemplate restTemplate) {
        this.orderRepository = orderRepository;
        this.restTemplate = restTemplate;
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public Order placeOrder(Long userId) {
        // 1️⃣ Get cart items
        CartItemDTO[] cartItems = restTemplate.getForObject(
                cartServiceUrl + userId,
                CartItemDTO[].class
        );

        if (cartItems == null || cartItems.length == 0) {
            throw new RuntimeException("Cart is empty!");
        }

        // 2️⃣ Calculate total price
        double total = Arrays.stream(cartItems)
                .mapToDouble(item -> item.getPrice() * item.getQuantity())
                .sum();

        // 3️⃣ Save order
        Order order = new Order();
        order.setUserId(userId);
        order.setTotalAmount(total);
        order.setStatus("CREATED");
        orderRepository.save(order);

        // 4️⃣ Reduce product stock
        for (CartItemDTO item : cartItems) {
            reduceProductStock(item.getProductId(), item.getQuantity());
        }

        // 5️⃣ Clear cart
        restTemplate.delete(cartServiceUrl + "/clear/" + userId);

        return order;
    }

    private void reduceProductStock(String productId, int qty) {
        String url = productServiceUrl + "/" + productId + "/reduce-stock?qty=" + qty;
        restTemplate.exchange(url, HttpMethod.PATCH, HttpEntity.EMPTY, Void.class);
    }

    public Order getOrder(Long orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found!"));
    }

    // DTO class
    static class CartItemDTO {
        private String productId;
        private String productName;
        private Double price;
        private Integer quantity;

        public String getProductId() { return productId; }
        public void setProductId(String productId) { this.productId = productId; }
        public String getProductName() { return productName; }
        public void setProductName(String productName) { this.productName = productName; }
        public Double getPrice() { return price; }
        public void setPrice(Double price) { this.price = price; }
        public Integer getQuantity() { return quantity; }
        public void setQuantity(Integer quantity) { this.quantity = quantity; }
    }
}
