package com.odkor.projectmanagementtool.services;

import com.odkor.projectmanagementtool.domain.Backlog;
import com.odkor.projectmanagementtool.domain.Project;
import com.odkor.projectmanagementtool.domain.User;
import com.odkor.projectmanagementtool.exceptions.ProjectIdException;
import com.odkor.projectmanagementtool.exceptions.ProjectNotFoundException;
import com.odkor.projectmanagementtool.repositories.BacklogRepository;
import com.odkor.projectmanagementtool.repositories.ProjectRepository;
import com.odkor.projectmanagementtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private UserRepository userRepository;

    public Project saveOrUpdateProject(Project project, String username) {
        String identifier = project.getIdentifier().toUpperCase();

        if(project.getId() != null) {

            Project existingProject = projectRepository.findByIdentifier(project.getIdentifier());

            if(existingProject != null && (!existingProject.getProjectLeader().equals(username))) {
                throw new ProjectNotFoundException("Project not found in your account");
            } else if (existingProject == null) {
                throw new ProjectNotFoundException("Project with ID: " + project.getIdentifier() + " cannot be updated because it does not exist.");
            }
        }

        try {

            User user  = userRepository.findByUsername(username);
            project.setUser(user);
            project.setProjectLeader(user.getUsername());

            project.setIdentifier(identifier);

            if(project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setIdentifier(identifier);
            } else {
                project.setBacklog(backlogRepository.findByIdentifier(identifier));
            }

            return projectRepository.save(project);
        } catch (Exception ex) {
            throw new ProjectIdException("Project Id " + identifier + " already exists.");
        }

    }

    public Project findProjectByIdentifier(String identifier, String username) {
        Project project = projectRepository.findByIdentifier(identifier.toUpperCase());

        if(project == null) {
            throw new ProjectIdException("Project Id " + identifier.toUpperCase() + " does not exist.");
        }

        if(!project.getProjectLeader().equals(username)) {
            throw new ProjectNotFoundException("Project not found in your account");
        }

        return project;
    }

    public Iterable<Project> findAllProjects(String username) {
        return projectRepository.findAllByProjectLeader(username);
    }

    public void deleteProjectByIdentifier(String identifier, String username) {

        projectRepository.delete(findProjectByIdentifier(identifier, username));
    }
}
