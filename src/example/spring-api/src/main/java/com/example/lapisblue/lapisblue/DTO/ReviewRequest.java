package com.example.lapisblue.lapisblue.DTO;

public record ReviewRequest(
        Integer userId,
        Integer salesId,
        Float rating,
        String reviewComment
) {}


