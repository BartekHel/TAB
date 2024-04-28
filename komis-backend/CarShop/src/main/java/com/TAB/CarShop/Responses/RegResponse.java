package com.TAB.CarShop.Responses;

import com.TAB.CarShop.Entities.Role;

public class RegResponse {
    public boolean success;
    public String message;

    public RegResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
}
