package com.example.lapisblue.lapisblue.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "sales")
@Getter
@Setter
public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "movie_id")
    private Movie movie; // nullable

    @Column(name = "site_name", length = 16)
    private String siteName; // yes24 | aladin | kyobo

    @Column(name = "site_url", length = 1024)
    private String siteUrl;

    @Column(name = "price")
    private Integer price;

    @Column(name = "quality", length = 1)
    private String quality; // single char

    @Column(name = "region_code", length = 1)
    private Character regionCode;

    @Column(name = "is_limited_edition")
    private Boolean isLimitedEdition;

    @Column(name = "image_link", length = 1024)
    private String imageLink;

    @Column(name = "bluray_title")
    private String blurayTitle;
}


