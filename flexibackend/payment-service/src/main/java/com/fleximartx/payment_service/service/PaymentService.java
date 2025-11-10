package com.fleximartx.payment_service.service;

import com.fleximartx.payment_service.model.Payment;
import com.fleximartx.payment_service.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final WebClient webClient;

    @Value("${order.service.url}")
    private String orderServiceUrl;

    public PaymentService(PaymentRepository paymentRepository, WebClient.Builder webClientBuilder) {
        this.paymentRepository = paymentRepository;
        this.webClient = webClientBuilder.build();
    }

    public Payment processPayment(Long orderId, Long userId, Double amount, String method) {
        // 1️⃣ Simulate payment success
        Payment payment = new Payment();
        payment.setOrderId(orderId);
        payment.setUserId(userId);
        payment.setAmount(amount);
        payment.setPaymentMethod(method);
        payment.setStatus("SUCCESS");

        paymentRepository.save(payment);

        // 2️⃣ Update order status using PATCH with WebClient (no Apache dependency)
        webClient.patch()
                .uri(orderServiceUrl + orderId + "/status?status=CONFIRMED")
                .retrieve()
                .bodyToMono(Void.class)
                .block();

        return payment;
    }

    public Payment getPayment(Long id) {
        return paymentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found!"));
    }
}
