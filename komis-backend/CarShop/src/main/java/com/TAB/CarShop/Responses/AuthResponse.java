package com.TAB.CarShop.Responses;

import com.TAB.CarShop.Entities.Role;

public class AuthResponse {
    public boolean success;
    public Role role;

    public AuthResponse(boolean success, Role role) {
        this.success = success;
        this.role = role;
    }
}
