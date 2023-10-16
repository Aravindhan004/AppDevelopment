package com.app.bookstagram.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.bookstagram.constant.Api;
import com.app.bookstagram.dto.request.BookRequest;
import com.app.bookstagram.dto.request.Request;
import com.app.bookstagram.dto.response.BookResponse;
// import com.app.bookstagram.dto.response.CountResponse;
import com.app.bookstagram.service.BookService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@CrossOrigin
@RequestMapping(Api.BOOK)
@Tag(name = "Books")

public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/createBook")
    public ResponseEntity<String> createBook(@RequestBody Request bookRequest)
    {
        return bookService.createBook(bookRequest);
    }

    @GetMapping(value = "/getBook/{bid}")
    public ResponseEntity<BookResponse> getBookDetails(@PathVariable("bid") Long bid)
    {
        BookResponse bookResponse = bookService.getBookDetails(bid);
        return bookResponse != null ? ResponseEntity.ok().body(bookResponse) : ResponseEntity.notFound().build();
    }

    @GetMapping(value = "/getAllBooks")
    public List<BookResponse> getAllBookDetails()
    {
        List<BookResponse> bookResponse = bookService.getAllBookDetails();
        return bookResponse;
    }

    @PutMapping(value = "/updateBook/{bid}", produces = "application/json")
    public ResponseEntity<String> updateBookDetails(final @RequestBody BookRequest request, @PathVariable("bid") Long bid)
    {
        return bookService.updateBookDetails(request, bid);
    }

    @DeleteMapping(value = "/deleteBook/{bid}")
    public ResponseEntity<String> deleteBook(@PathVariable("bid") Long bid)
    {
        return bookService.deleteBook(bid);
    }

    @GetMapping("/bookCount")
    public Long getBookCount()
    {
        return bookService.getBookCount();
    }
    
}
