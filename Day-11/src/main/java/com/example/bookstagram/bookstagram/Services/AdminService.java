package com.example.bookstagram.bookstagram.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookstagram.bookstagram.Models.Admin;
import com.example.bookstagram.bookstagram.Repositories.AdminRepo;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminRepo;

    public Admin getadminDetails(Admin admin) {
        
        Optional<Admin> getAdmin = adminRepo.findByAdminemailAndAdminpassword(admin.getAdminemail(),admin.getAdminpassword());

        if(getAdmin.isPresent()) return getAdmin.get();
        else return null;
    }
    
}
