package com.fleximartx.backend.product.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {
    @Id
    private String id;

    private String name;
    private String description;
    private Double price;

    // getters & setters
}
