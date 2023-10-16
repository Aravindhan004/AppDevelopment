package com.app.bookstagram.service;

import java.util.List;

import com.app.bookstagram.dto.request.UserRequest;
import com.app.bookstagram.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    String deleteUser(Long uid);

    Long getUserCount();

}
