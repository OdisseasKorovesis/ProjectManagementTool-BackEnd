package com.odkor.projectmanagementtool.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProjectIdExceptionResponse {

    private String projectIdentifier;
}
