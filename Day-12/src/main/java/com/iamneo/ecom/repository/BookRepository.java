package com.iamneo.ecom.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.ecom.model.Book;


public interface BookRepository extends JpaRepository<Book, Integer> {


    Book findByBid(int bid);
    
    
}