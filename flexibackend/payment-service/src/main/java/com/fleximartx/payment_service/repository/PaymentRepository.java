package com.fleximartx.payment_service.repository;



import com.fleximartx.payment_service.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> { }

