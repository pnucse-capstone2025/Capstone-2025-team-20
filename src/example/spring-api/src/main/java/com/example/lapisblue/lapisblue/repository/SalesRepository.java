package com.example.lapisblue.lapisblue.repository;

import com.example.lapisblue.lapisblue.domain.Sales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SalesRepository extends JpaRepository<Sales, Integer> {
    java.util.List<Sales> findByBlurayTitleContainingIgnoreCase(String blurayTitle);
    java.util.List<Sales> findByMovie_TitleContainingIgnoreCase(String title);

    // IDs only
    @Query("select s.id from Sales s")
    java.util.List<Integer> findAllIds();

    @Query("select s.id from Sales s where s.movie.id = :movieId")
    java.util.List<Integer> findIdsByMovieId(@Param("movieId") Integer movieId);

    @Query("select s.id from Sales s where lower(s.movie.title) like lower(concat('%', :title, '%'))")
    java.util.List<Integer> findIdsByMovieTitleLike(@Param("title") String title);

    @Query("select s.id from Sales s where lower(s.blurayTitle) like lower(concat('%', :keyword, '%'))")
    java.util.List<Integer> findIdsByBlurayTitleLike(@Param("keyword") String keyword);

    // 특정 영화 ID들의 Sales 정보 조회
    @Query("select s from Sales s where s.movie.id in :movieIds")
    java.util.List<Sales> findByMovieIdIn(@Param("movieIds") java.util.List<Integer> movieIds);
}



