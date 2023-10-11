package com.app.ms.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.ms.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    
    Book findByBid(Long bid);

    // Book deleteByBid(Long bid);
    
} 