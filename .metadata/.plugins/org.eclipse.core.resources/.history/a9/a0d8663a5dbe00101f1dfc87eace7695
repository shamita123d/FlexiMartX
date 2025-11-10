package com.fleximartx.payment_service.controller;


import com.fleximartx.payment_service.model.Payment;
import com.fleximartx.payment_service.service.PaymentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
@CrossOrigin(origins = "*")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/process")
    public Payment makePayment(@RequestParam Long orderId,
                               @RequestParam Long userId,
                               @RequestParam Double amount,
                               @RequestParam String method) {
        return paymentService.processPayment(orderId, userId, amount, method);
    }

    @GetMapping("/{id}")
    public Payment getPayment(@PathVariable Long id) {
        return paymentService.getPayment(id);
    }
}
