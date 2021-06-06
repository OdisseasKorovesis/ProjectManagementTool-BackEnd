package com.odkor.projectmanagementtool.repositories;

import com.odkor.projectmanagementtool.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}
