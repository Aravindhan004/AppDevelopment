package com.example.bookstagram.bookstagram.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bookstagram.bookstagram.Models.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer>{

    public Optional<Admin> findByAdminemailAndAdminpassword(String adminemail, String adminpassword);

    
}
