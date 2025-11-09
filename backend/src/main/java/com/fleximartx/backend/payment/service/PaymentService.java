package com.fleximartx.backend.payment.service;

import com.fleximartx.backend.payment.entity.Payment;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentService {
    private List<Payment> payments = new ArrayList<>();

    public List<Payment> getAllPayments() { return payments; }
    public Payment processPayment(Payment payment) {
        payment.setStatus("SUCCESS");
        payments.add(payment);
        return payment;
    }
}
