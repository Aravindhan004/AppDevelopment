package com.app.ms.service;

import com.app.ms.dto.request.BookRequest;
import com.app.ms.dto.response.BookResponse;
// import com.app.ms.dto.response.CountResponse;

public interface BookService {
    
    boolean createBook(BookRequest request);

    BookResponse getBookDetails(Long bid);

    boolean updateBookDetails(BookRequest request, Long bid);

    boolean deleteBook(Long bid);

    // CountResponse getBookCountDetails();
}
