package com.TAB.CarShop.Requests;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AuthRequest {
    private String login;
    private String password;

    public AuthRequest() {}

    public AuthRequest(String login, String password) {
        this.login = login;
        this.password = password;
    }

}
