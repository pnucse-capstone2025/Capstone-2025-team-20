package com.example.lapisblue.lapisblue.controller;

import com.example.lapisblue.lapisblue.DTO.SalesResponse;
import com.example.lapisblue.lapisblue.domain.Sales;
import com.example.lapisblue.lapisblue.service.SalesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/sales")
@RequiredArgsConstructor
public class SalesController {

    private final SalesService salesService;

    @GetMapping
    public ResponseEntity<List<SalesResponse>> list(@RequestParam(required = false) Integer limit) {
        try {
            List<Sales> all = salesService.findAll(limit);
            return ResponseEntity.ok(all.stream().map(SalesResponse::from).collect(Collectors.toList()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(List.of());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<SalesResponse> get(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(SalesResponse.from(salesService.findById(id)));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/search")
    public ResponseEntity<java.util.List<SalesResponse>> search(@RequestParam String query) {
        try {
            java.util.List<Sales> results = salesService.search(query);
            return ResponseEntity.ok(results.stream().map(SalesResponse::from).collect(Collectors.toList()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(java.util.List.of());
        }
    }
}


