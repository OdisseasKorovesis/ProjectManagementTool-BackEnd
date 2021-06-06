package com.odkor.projectmanagementtool.exceptions;

import lombok.Data;

@Data
public class InvalidLoginExceptionResponse {

    private String username;
    private String password;

    public InvalidLoginExceptionResponse() {
        this.username = "Invalid Username";
        this.password = "Invalid Password";
    }
}
