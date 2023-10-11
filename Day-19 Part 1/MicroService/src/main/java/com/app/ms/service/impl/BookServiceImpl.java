package com.app.ms.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ms.dto.request.BookRequest;
import com.app.ms.dto.response.BookResponse;
import com.app.ms.model.Book;
import com.app.ms.repository.BookRepository;
import com.app.ms.service.BookService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BookServiceImpl implements BookService{

   @Autowired
    private BookRepository bookRepository;

    @Override
    public boolean createBook(BookRequest request)
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
    public BookResponse getBookDetails(Long bid)
    {
        Book b = bookRepository.findByBid(bid);
        return mapBookToBookResponse(b);
    }

    @Override
    public boolean updateBookDetails(BookRequest request, Long bid)
    {
        Book book = bookRepository.findByBid(bid);
        if(book != null)
        {
           book.setBookname(request.getBookname());
           book.setAuthorname(request.getAuthorname());
           book.setDop(request.getDop());
           bookRepository.save(book);
           return true;
        }
        else
        {
            return false;
        }

    }

    private BookResponse mapBookToBookResponse(Book book) {
        return BookResponse.builder()
                .bid(book.getBid())
                .bookname(book.getBookname())
                .authorname(book.getAuthorname())
                .dop(book.getDop())
                .build();
    }

    @Override
    public boolean deleteBook(Long bid)
    {
        bookRepository.deleteById(bid);
        return true;
    }

    
    
}
