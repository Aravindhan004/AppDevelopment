package com.app.bookstagram.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bid;

    private String bookname;
    private String authorname;
    private String dop;
    private String genre;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String bookdesc;
    
    private String bookUrl1;
    private String bookImgUrl; 
    
}
