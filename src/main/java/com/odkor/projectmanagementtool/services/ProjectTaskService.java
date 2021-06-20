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

    @Autowired
    private ProjectService projectService;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username) {


            Backlog backlog = projectService.findProjectByIdentifier(projectIdentifier, username).getBacklog();
            projectTask.setBacklog(backlog);

            Integer backlogSequence = backlog.getPTSequence();
            backlogSequence++;
            backlog.setPTSequence(backlogSequence);

            projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
            projectTask.setIdentifier(projectIdentifier);

            if ( projectTask.getPriority() == null || projectTask.getPriority() == 0) {
                projectTask.setPriority(3);
            }

            if (projectTask.getStatus() == null || projectTask.getStatus().equals("")) {
                projectTask.setStatus("TO DO");
            }

            return projectTaskRepository.save(projectTask);
    }

    public Iterable<ProjectTask> findBacklogById(String id, String username) {

        projectService.findProjectByIdentifier(id, username);

        return projectTaskRepository.findByIdentifierOrderByPriority(id);
    }

    public ProjectTask findProjectTaskBySequence(String backlogId, String sequence, String username) {

        projectService.findProjectByIdentifier(backlogId, username);

        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(sequence);
        if(projectTask == null) {
            throw new ProjectNotFoundException("Project Task with ID: " + sequence + " does not exist");
        }

        if(!projectTask.getIdentifier().equals(backlogId)) {
            throw new ProjectNotFoundException("Project Task: " + sequence + " does not exist in project " + backlogId);
        }

        return projectTask;
    }

    public ProjectTask updateByProjectSequence(ProjectTask updatedTask, String backlogId, String sequence, String username) {
        ProjectTask projectTask = findProjectTaskBySequence(backlogId, sequence, username);

        projectTask = updatedTask;

        return projectTaskRepository.save(projectTask);

    }

    public void deleteProjectTaskBySequence(String backlogId, String sequence, String username) {
        ProjectTask projectTask = findProjectTaskBySequence(backlogId, sequence, username);
        projectTaskRepository.delete(projectTask);
    }
}
