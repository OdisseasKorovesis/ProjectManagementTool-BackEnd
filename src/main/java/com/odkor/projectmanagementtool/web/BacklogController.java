package com.odkor.projectmanagementtool.web;

import com.odkor.projectmanagementtool.domain.Backlog;
import com.odkor.projectmanagementtool.domain.ProjectTask;
import com.odkor.projectmanagementtool.services.MapValidationErrorService;
import com.odkor.projectmanagementtool.services.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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

    @GetMapping("/{backlogId}")
    public Iterable<ProjectTask> getProjectBacklog(@PathVariable String backlogId) {

        return projectTaskService.findBacklogById(backlogId);
    }

    @GetMapping("/{backlogId}/{ptId}")
    public ResponseEntity<?> getProjectTask(@PathVariable String backlogId, @PathVariable String ptId) {

        ProjectTask projectTask = projectTaskService.findProjectTaskBySequence(backlogId, ptId);
        return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
    }

    @PatchMapping("/{backlogId}/{ptId}")
    public ResponseEntity<?> updateProjectTask(@Valid @RequestBody ProjectTask projectTask, BindingResult result,
                                               @PathVariable String backlogId, @PathVariable String ptId) {

        ResponseEntity<?> errorMap = mapValidationErrorService.produceErrorMap(result);
        if(errorMap != null) {
            return errorMap;
        }

        ProjectTask updatedTask = projectTaskService.updateByProjectSequence(projectTask, backlogId, ptId);

        return new ResponseEntity<ProjectTask>(updatedTask, HttpStatus.OK);
    }

    @DeleteMapping("/{backlogId}/{ptId}")
    public ResponseEntity<?> deleteProjectTask( @PathVariable String backlogId, @PathVariable String ptId) {
        projectTaskService.deleteProjectTaskBySequence(backlogId, ptId);
        return new ResponseEntity<String>("Project task " + ptId + " was deleted successfully", HttpStatus.OK);
    }
}
