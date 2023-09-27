package com.example.bookstagram.bookstagram.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.bookstagram.bookstagram.Models.User;


@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
   
    public Optional<User> findByUseremailAndUserpassword(String useremail, String userpassword);

    public Optional<User> findByUseremail(String useremail);;
}
