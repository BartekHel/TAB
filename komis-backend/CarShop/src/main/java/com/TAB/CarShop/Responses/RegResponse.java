package com.TAB.CarShop.Responses;

import com.TAB.CarShop.Entities.Role;

public class RegResponse {
    public boolean success;
    public long id;
    public String login;
    public String message;

    public RegResponse(boolean success, long id, String login, String message) {
        this.success = success;
        this.id = id;
        this.login = login;
        this.message = message;
    }
}
