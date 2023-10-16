package com.app.bookstagram.service;

import com.app.bookstagram.dto.request.AuthenticationRequest;
import com.app.bookstagram.dto.request.RegisterRequest;
import com.app.bookstagram.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
