package com.TAB.CarShop.Requests;

public class RegRequest {
    private String login;
    private String password;
    private String email;
    private String role;
    private String name;
    private String surname;

    public RegRequest() {}

    public RegRequest(String login, String password, String email, String name, String surname) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.role = role;
        this.name = name;
        this.surname = surname;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
