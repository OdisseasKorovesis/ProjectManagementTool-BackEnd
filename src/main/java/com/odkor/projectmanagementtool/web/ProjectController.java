package com.odkor.projectmanagementtool.web;

import com.odkor.projectmanagementtool.domain.Project;
import com.odkor.projectmanagementtool.services.MapValidationErrorService;
import com.odkor.projectmanagementtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
@CrossOrigin
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.produceErrorMap(result);
        if(errorMap != null) {
            System.out.println(errorMap);
            return errorMap;
        }

        projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

    @GetMapping("single/{identifier}")
    public ResponseEntity<?> getProjectByIdentifier(@PathVariable String identifier) {
        Project project = projectService.findProjectByIdentifier(identifier);
        return new ResponseEntity<Project>(project, HttpStatus.OK);

    }

    @GetMapping("/all")
    public Iterable<Project> getAllProjects() {
        System.out.println("called");
        return projectService.findAllProjects();
    }

    @DeleteMapping("/{identifier}")
    public ResponseEntity<?> deleteProject(@PathVariable String identifier) {
        projectService.deleteProjectByIdentifier(identifier);
        return new ResponseEntity<String>("Project with Identifier: " + identifier + " deleted successfully", HttpStatus.OK);
    }

}
