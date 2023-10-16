package com.app.bookstagram.service;


import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.bookstagram.dto.request.BookRequest;
import com.app.bookstagram.dto.request.Request;
import com.app.bookstagram.dto.response.BookResponse;

public interface BookService {
    
    ResponseEntity<String> createBook(Request bookRequest);
    
    BookResponse getBookDetails(Long bid);

    List<BookResponse> getAllBookDetails();

    ResponseEntity<String> updateBookDetails(BookRequest request, Long bid);

    ResponseEntity<String> deleteBook(Long bid);

    Long getBookCount();
}
