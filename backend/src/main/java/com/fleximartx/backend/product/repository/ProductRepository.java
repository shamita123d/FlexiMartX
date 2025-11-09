package com.fleximartx.backend.product.repository;

import com.fleximartx.backend.product.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
}
