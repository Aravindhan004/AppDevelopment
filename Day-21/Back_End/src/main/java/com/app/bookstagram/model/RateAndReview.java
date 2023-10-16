package com.app.bookstagram.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RateAndReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rid;

    private int bid;
    private int uid;
    private int rating;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String review;

    
}
