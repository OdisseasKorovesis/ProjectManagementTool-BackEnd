package com.odkor.projectmanagementtool.services;

import com.odkor.projectmanagementtool.domain.Backlog;
import com.odkor.projectmanagementtool.domain.ProjectTask;
import com.odkor.projectmanagementtool.repositories.BacklogRepository;
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

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
        Backlog backlog = backlogRepository.findByIdentifier(projectIdentifier);
        projectTask.setBacklog(backlog);

        Integer backlogSequence = backlog.getPTSequence();
        backlogSequence++;
        backlog.setPTSequence(backlogSequence);

        projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
        projectTask.setIdentifier(projectIdentifier);

        if(projectTask.getPriority() == null) {
            projectTask.setPriority(3);
        }

        if(projectTask.getStatus() == "" || projectTask.getStatus() == null) {
            projectTask.setStatus("TO DO");
        }

        return projectTaskRepository.save(projectTask);


    }

    public Iterable<ProjectTask> findBacklogById(String id) {

        return projectTaskRepository.findByIdentifierOrderByPriority(id);
    }
}
