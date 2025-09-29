package com.example.lapisblue.lapisblue.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.LocalTime;


@Entity
@Table(name = "movies")
@Getter
@Setter
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Column(name = "director")
    private String director;

    @Column(name = "release_date")
    private LocalDateTime releaseDate;

    @Column(name = "production_company")
    private String productionCompany;

    @Column(name = "distribution_company")
    private String distributionCompany;

    @Column(name = "running_time")
    private LocalTime runningTime;
}

