package com.example.lapisblue.lapisblue.service;

import com.example.lapisblue.lapisblue.domain.Sales;
import com.example.lapisblue.lapisblue.repository.SalesRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SalesService {

    private final SalesRepository salesRepository;

    public List<Sales> findAll(Integer limit) {
        List<Sales> all = salesRepository.findAll();
        if (limit != null && limit > 0 && limit < all.size()) {
            all = all.subList(0, limit);
        }
        return all;
    }

    public Sales findById(Integer id) {
        return salesRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Sales not found: id=" + id));
    }

    public java.util.List<Sales> search(String query) {
        if (query == null || query.isBlank()) {
            return java.util.List.of();
        }
        // 우선 blurayTitle로, 결과 없으면 영화 제목으로 재검색
        var byBluray = salesRepository.findByBlurayTitleContainingIgnoreCase(query);
        if (!byBluray.isEmpty()) return byBluray;
        return salesRepository.findByMovie_TitleContainingIgnoreCase(query);
    }
}


