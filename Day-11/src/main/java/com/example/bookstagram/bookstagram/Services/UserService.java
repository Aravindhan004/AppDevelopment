package com.example.bookstagram.bookstagram.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookstagram.bookstagram.Models.User;
import com.example.bookstagram.bookstagram.Repositories.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public User getUserDetails(User user)
    {
        Optional<User> getUser = userRepo.findByUseremailAndUserpassword(user.getUseremail(), user.getUserpassword());

        if(getUser.isPresent()) return getUser.get();
        else return null;
    }

    public boolean createUser(User user) 
    {
            if(userRepo.findByUseremail(user.getUseremail()).isPresent())
            {
                return false;
            }    
            else
            {
                userRepo.save(user);
                return true; 
            }    
    }
}
