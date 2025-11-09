package com.fleximartx.backend.product.service;

import com.fleximartx.backend.product.entity.Product;
import com.fleximartx.backend.product.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repo;
    public ProductService(ProductRepository repo) { this.repo = repo; }

    public List<Product> getAllProducts() { return repo.findAll(); }
    public Product saveProduct(Product product) { return repo.save(product); }
}
