package com.odkor.projectmanagementtool.web;

import com.odkor.projectmanagementtool.domain.ProjectTask;
import com.odkor.projectmanagementtool.services.MapValidationErrorService;
import com.odkor.projectmanagementtool.services.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/{backlogId}")
    public ResponseEntity<?> addProjectTaskToBacklog(@Valid @RequestBody ProjectTask projectTask, BindingResult result,
                                                     @PathVariable String backlogId) {

        ResponseEntity<?> errorMap = mapValidationErrorService.produceErrorMap(result);
        if(errorMap != null) {
            return errorMap;
        }

        ProjectTask projectTaskToBeSaved = projectTaskService.addProjectTask(backlogId, projectTask);

        return new ResponseEntity<ProjectTask>(projectTaskToBeSaved, HttpStatus.CREATED);
    }
}
