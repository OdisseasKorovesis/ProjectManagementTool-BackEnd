package com.odkor.projectmanagementtool.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UsernameAlreadyExistsExceptionResponse {

    private String username;
}
