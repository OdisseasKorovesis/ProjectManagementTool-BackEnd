package com.odkor.projectmanagementtool.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@AllArgsConstructor
@Data
@ToString
public class LoginSuccessResponse {

    private boolean success;
    private String token;
}
