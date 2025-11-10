package com.fleximartx.order_service.consumer;

import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class PaymentEventListener {

    @KafkaListener(topics = "payment-topic", groupId = "fleximartx-group")
    public void listenPaymentEvent(String message) {
        System.out.println("📩 Received Kafka message: " + message);
        // Here you can parse message & update order status to CONFIRMED
    }
}
