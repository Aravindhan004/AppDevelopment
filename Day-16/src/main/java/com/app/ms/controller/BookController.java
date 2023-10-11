package com.app.ms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ms.dto.request.BookRequest;
import com.app.ms.service.BookService;

@RequestMapping("/api/v1/bookms")
@RestController
@CrossOrigin
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/createBook")
    public ResponseEntity<String> createBook(@RequestBody BookRequest bookRequest)
    {
        boolean isCreated = bookService.createBook(bookRequest);
        return isCreated ? ResponseEntity.ok("Book saved successfully") : ResponseEntity.badRequest().body("Unsuccessful");
    }

    // @GetMapping("/getBookCount")
    // public ResponseEntity<CountResponse> getBookCountDetails() 
    // {
    //     CountResponse countResponse = bookService.getBookCountDetails();
    //     return countResponse.getCount() != 0 ? ResponseEntity.ok().body(countResponse) : 
    //             ResponseEntity.noContent().build();
    // }

    @PutMapping(value = "/updateBook/{bid}", produces = "application/json")
    public ResponseEntity<String> updateBookDetails(final @RequestBody BookRequest request, @PathVariable("bid") Long bid)
    {
        boolean bookResponse = bookService.updateBookDetails(request, bid);
        return bookResponse ? ResponseEntity.ok().body("Updated Successfully!") : ResponseEntity.badRequest().body("Unsuccessful");
    }

    @DeleteMapping(value = "/deleteBook/{bid}")
    public ResponseEntity<String> deleteBook(@PathVariable("bid") Long bid)
    {
        boolean isUpdated = bookService.deleteBook(bid);
        return isUpdated ? ResponseEntity.ok().body("Deleted Successfully!") : ResponseEntity.badRequest().body("Unsuccessful");
    }
    
}

