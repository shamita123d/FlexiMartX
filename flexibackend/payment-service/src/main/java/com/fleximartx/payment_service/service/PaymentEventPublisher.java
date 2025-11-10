package com.fleximartx.payment_service.service;
import org.springframework.kafka.core.KafkaTemplate;


import org.springframework.stereotype.Service;

@Service
public class PaymentEventPublisher {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public PaymentEventPublisher(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void publishPaymentSuccess(Long orderId, Double amount) {
        String message = "Payment successful for Order ID: " + orderId + ", amount: " + amount;
        kafkaTemplate.send("payment-topic", message);
        System.out.println("✅ Sent Kafka message: " + message);
    }
}
