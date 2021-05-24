package com.odkor.projectmanagementtool.repositories;

import com.odkor.projectmanagementtool.domain.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {

    Backlog findByIdentifier(String identifier);
}
