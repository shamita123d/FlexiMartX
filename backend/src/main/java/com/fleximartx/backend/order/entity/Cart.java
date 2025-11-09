package com.fleximartx.backend.order.entity;

import jakarta.persistence.*;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String items; // JSON string

    // getters & setters
}
