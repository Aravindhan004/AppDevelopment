package com.app.bookstagram.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.app.bookstagram.dto.request.BookRequest;
import com.app.bookstagram.dto.request.Request;
import com.app.bookstagram.dto.response.BookResponse;
import com.app.bookstagram.model.Book;
import com.app.bookstagram.repository.BookRepository;
import com.app.bookstagram.service.BookService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

    public ResponseEntity<String> createBook(Request bookRequest) 
    {
		ResponseEntity<String> responseEntity = restTemplate().postForEntity(
				"http://localhost:8081/api/v1/bookms/createBook",
				bookRequest,
				String.class
		);

		return responseEntity;
    }

    @Override
    public BookResponse getBookDetails(Long bid)
    {
        Book b = bookRepository.findByBid(bid);
        return mapBookToBookResponse(b);
    }

    @Override
    public List<BookResponse> getAllBookDetails()
    {
        List<Book> b = bookRepository.findAll();
        List<BookResponse> br = new ArrayList<>();
        for(Book book : b){
            br.add(mapBookToBookResponse(book));
        }
        return br;
    }

    public ResponseEntity<String> updateBookDetails(BookRequest request, Long bid) 
    {
    String microserviceUrl = "http://localhost:8081/api/v1/bookms/updateBook/" + bid;

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);
    HttpEntity<BookRequest> requestEntity = new HttpEntity<>(request, headers);

    ResponseEntity<String> responseEntity = restTemplate().exchange(
            microserviceUrl,
            HttpMethod.PUT,
            requestEntity,
            String.class
    );

    return responseEntity;
}

    private BookResponse mapBookToBookResponse(Book book) {
        return BookResponse.builder()
                .bid(book.getBid())
                .bookname(book.getBookname())
                .authorname(book.getAuthorname())
                .dop(book.getDop())
                .build();
    }
    
    public ResponseEntity<String> deleteBook(Long bid) {

		Map<String, Long> uriVariables = new HashMap<>();
		uriVariables.put("bid", bid);

		ResponseEntity<String> responseEntity = restTemplate().exchange(
				"http://localhost:8081/api/v1/bookms/deleteBook/{bid}",
				HttpMethod.DELETE,  
				null,  
				String.class,
				uriVariables
		);

		return responseEntity;
	}

    public Long getBookCount()
    {
        return bookRepository.count();
    }

    
}
