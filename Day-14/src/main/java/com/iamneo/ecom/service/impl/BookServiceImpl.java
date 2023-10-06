package com.iamneo.ecom.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.ecom.dto.request.BookRequest;
import com.iamneo.ecom.dto.request.Request;
import com.iamneo.ecom.dto.response.BookResponse;
import com.iamneo.ecom.model.Book;
import com.iamneo.ecom.repository.BookRepository;
import com.iamneo.ecom.service.BookService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public boolean createBook(Request request)
    {
        var book = Book.builder()
                    .authorname(request.getAuthorname())
                    .bookname(request.getBookname())
                    .dop(request.getDop())
                    .build();

        bookRepository.save(book);
        
        return true;
    }

    @Override
    public BookResponse getBookDetails(int bid)
    {
        Book b = bookRepository.findByBid(bid);
        return mapUserToBookResponse(b);
    }

    @Override
    public BookResponse updateBookDetails(BookRequest request, int bid)
    {
        Book book = bookRepository.findById(bid).get();
        if(book != null)
        {
           book.setBookname(request.getBookname());
           book.setAuthorname(request.getAuthorname());
           book.setDop(request.getDop());
           bookRepository.save(book);
        }

        return mapUserToBookResponse(book);
    }

    private BookResponse mapUserToBookResponse(Book book) {
        return BookResponse.builder()
                .bid(book.getBid())
                .bookname(book.getBookname())
                .authorname(book.getAuthorname())
                .dop(book.getDop())
                .build();
    }

    @Override
    public String deleteBook(int bid)
    {
        bookRepository.deleteById(bid);
        return "Deleted Successfully";
    }
    
}
