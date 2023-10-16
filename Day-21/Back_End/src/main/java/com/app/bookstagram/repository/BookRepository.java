package com.app.bookstagram.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.bookstagram.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {


    Book findByBid(Long bid);
    
    
}