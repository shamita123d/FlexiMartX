package com.fleximartx.product_service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fleximartx.product_service.model.Product;
import com.fleximartx.product_service.repository.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository repo;
    public ProductService(ProductRepository repo){ this.repo = repo; }

    public List<Product> getAll() { return repo.findAll(); }
    public Product getById(String id) { return repo.findById(id).orElse(null); }
    public Product create(Product p){ return repo.save(p); }
    public void reduceStock(String id, int qty){
        Product p = repo.findById(id).orElseThrow();
        p.setStock(p.getStock() - qty);
        repo.save(p);
    }
}
