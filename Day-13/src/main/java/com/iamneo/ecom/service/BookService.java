package com.iamneo.ecom.service;


import com.iamneo.ecom.dto.request.BookRequest;
import com.iamneo.ecom.dto.request.Request;
import com.iamneo.ecom.dto.response.BookResponse;

public interface BookService {
    
    public boolean createBook(Request request);

    BookResponse getBookDetails(int bid);

    BookResponse updateBookDetails(BookRequest request, int bid);

    String deleteBook(int bid);

}
