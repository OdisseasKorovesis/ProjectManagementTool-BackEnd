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

            if (projectTask.getPriority() == 0 || projectTask.getPriority() == null) {
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
            throw new ProjectNotFoundException("Project with ID: " + id + " does not exist");
        }

        return projectTaskRepository.findByIdentifierOrderByPriority(id);
    }

    public ProjectTask findProjectTaskBySequence(String backlogId, String sequence) {

        Backlog backlog = backlogRepository.findByIdentifier(backlogId);
        if(backlog == null) {
            throw new ProjectNotFoundException("Project with ID: " + backlogId + " does not exist");
        }

        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(sequence);
        if(projectTask == null) {
            throw new ProjectNotFoundException("Project Task with ID: " + sequence + " does not exist");
        }

        if(!projectTask.getIdentifier().equals(backlogId)) {
            throw new ProjectNotFoundException("Project Task: " + sequence + " does not exist in project " + backlogId);
        }

        return projectTask;
    }

    public ProjectTask updateByProjectSequence(ProjectTask updatedTask, String backlogId, String sequence) {
        ProjectTask projectTask = findProjectTaskBySequence(backlogId, sequence);

        projectTask = updatedTask;

        return projectTaskRepository.save(projectTask);

    }

    public void deleteProjectTaskBySequence(String backlogId, String sequence) {
        ProjectTask projectTask = findProjectTaskBySequence(backlogId, sequence);
        projectTaskRepository.delete(projectTask);
    }
}
