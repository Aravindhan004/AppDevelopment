package com.example.bookstagram.bookstagram.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookstagram.bookstagram.Models.Admin;
import com.example.bookstagram.bookstagram.Models.User;
import com.example.bookstagram.bookstagram.Services.AdminService;
// import com.example.bookstagram.bookstagram.Services.AdminService;
import com.example.bookstagram.bookstagram.Services.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/bookstagram")
public class Bookstagram {
    @Autowired
    private UserService userService;

    @Autowired
    private AdminService adminService;

    @PostMapping(value = "/userLogin", consumes = "application/json", produces = "application/json")
    public User getUserDetails(@RequestBody User user)
    {
        return userService.getUserDetails(user);
    }

    @PostMapping(value = "/adminLogin", consumes = "application/json", produces = "application/json")
    public Admin getAdminDetails(@RequestBody Admin admin)
    {
        return adminService.getadminDetails(admin);
    }

    @PostMapping(value = "/createUser", produces = "application/json")
    public boolean createUser(@RequestBody User user){
        System.out.println(user);
       return userService.createUser(user);
    }
}
