package com.odkor.projectmanagementtool.repositories;

import com.odkor.projectmanagementtool.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {

    List<ProjectTask> findByIdentifierOrderByPriority(String id);

    ProjectTask findByProjectSequence(String sequence);
}
