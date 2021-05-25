package com.odkor.projectmanagementtool.services;

import com.odkor.projectmanagementtool.domain.Backlog;
import com.odkor.projectmanagementtool.domain.Project;
import com.odkor.projectmanagementtool.domain.ProjectTask;
import com.odkor.projectmanagementtool.exceptions.ProjectNotFoundException;
import com.odkor.projectmanagementtool.repositories.BacklogRepository;
import com.odkor.projectmanagementtool.repositories.ProjectRepository;
import com.odkor.projectmanagementtool.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {

        try {
            Backlog backlog = backlogRepository.findByIdentifier(projectIdentifier);
            projectTask.setBacklog(backlog);

            Integer backlogSequence = backlog.getPTSequence();
            backlogSequence++;
            backlog.setPTSequence(backlogSequence);

            projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
            projectTask.setIdentifier(projectIdentifier);

            if (projectTask.getPriority() == null) {
                projectTask.setPriority(3);
            }

            if (projectTask.getStatus().equals("") || projectTask.getStatus() == null) {
                projectTask.setStatus("TO DO");
            }

            return projectTaskRepository.save(projectTask);
        } catch (Exception ex) {
            throw new ProjectNotFoundException("Project not found");
        }
    }

    public Iterable<ProjectTask> findBacklogById(String id) {

        Project project = projectRepository.findByIdentifier(id);

        if(project == null) {
            throw new ProjectNotFoundException("Project with ID: " + id + " does now exist");
        }

        return projectTaskRepository.findByIdentifierOrderByPriority(id);
    }
}
