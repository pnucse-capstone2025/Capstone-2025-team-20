package com.example.lapisblue.lapisblue.DTO;

import com.example.lapisblue.lapisblue.domain.Sales;

public record SalesResponse(
        Integer id,
        Integer movieId,
        String siteName,
        String siteUrl,
        Integer price,
        String quality,
        String regionCode,
        Boolean isLimitedEdition,
        String imageLink,
        String blurayTitle
) {
    public static SalesResponse from(Sales s) {
        if (s == null) return new SalesResponse(null, null, null, null, null, null, null, null, null, null);
        Integer movieId = (s.getMovie() != null) ? s.getMovie().getId() : null;
        return new SalesResponse(
                s.getId(),
                movieId,
                s.getSiteName(),
                s.getSiteUrl(),
                s.getPrice(),
                s.getQuality(),
                s.getRegionCode() != null ? s.getRegionCode().toString() : null, //Maybe ok to delete...
                s.getIsLimitedEdition(),
                s.getImageLink(),
                s.getBlurayTitle()
        );
    }
}


