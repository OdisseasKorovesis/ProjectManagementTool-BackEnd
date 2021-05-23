package com.odkor.projectmanagementtool.services;

import com.odkor.projectmanagementtool.domain.Project;
import com.odkor.projectmanagementtool.exceptions.ProjectIdException;
import com.odkor.projectmanagementtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project) {
        try {
            project.setIdentifier(project.getIdentifier().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception ex) {
            throw new ProjectIdException("Project Id " + project.getIdentifier().toUpperCase() + " already exists.");
        }

    }

    public Project findProjectByIdentifier(String identifier) {
        Project project = projectRepository.findByIdentifier(identifier.toUpperCase());

        if(project == null) {
            throw new ProjectIdException("Project Id " + identifier.toUpperCase() + " does not exist.");
        }

        return project;
    }

    public Iterable<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    public void deleteProjectByIdentifier(String identifier) {
        Project project = projectRepository.findByIdentifier(identifier.toUpperCase());

        if(project == null) {
            throw new ProjectIdException("Project Id " + identifier.toUpperCase() + " cannot be deleted as it does not exist.");
        }

        projectRepository.delete(project);
    }
}
