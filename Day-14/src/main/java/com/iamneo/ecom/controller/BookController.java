package com.iamneo.ecom.controller;


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
import com.iamneo.ecom.service.BookService;
import com.iamneo.ecom.constant.Api;
import com.iamneo.ecom.dto.request.BookRequest;
import com.iamneo.ecom.dto.request.Request;
import com.iamneo.ecom.dto.response.BookResponse;

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
        System.out.println(bookRequest.getBookname());
        boolean isCreated = bookService.createBook(bookRequest);
        return isCreated ? ResponseEntity.ok("Book saved successfully") : ResponseEntity.badRequest().body("Unsuccessful");
    }

    @GetMapping(value = "/getBook/{bid}")
    public ResponseEntity<BookResponse> getBookDetails(@PathVariable("bid") int bid)
    {
        BookResponse bookResponse = bookService.getBookDetails(bid);
        return bookResponse != null ? ResponseEntity.ok().body(bookResponse) : ResponseEntity.notFound().build();
    }

    @PutMapping(value = "/updateBook/{bid}", produces = "application/json")
    public ResponseEntity<BookResponse> updateBookDetails(final @RequestBody BookRequest request, @PathVariable("bid") int bid)
    {
        BookResponse bookResponse = bookService.updateBookDetails(request, bid);
        return bookResponse != null ? ResponseEntity.ok().body(bookResponse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping(value = "/deleteBook/{bid}")
    public String deleteBook(@PathVariable("bid") int bid)
    {
        return bookService.deleteBook(bid);
    }
    
}
