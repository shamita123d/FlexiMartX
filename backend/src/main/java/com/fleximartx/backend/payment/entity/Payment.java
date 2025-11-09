package com.fleximartx.backend.payment.entity;

import jakarta.persistence.*;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long orderId;
    private String status;
    private Double amount;

    // getters & setters
}
