package com.angular.springboot.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.angular.springboot.model.User;

@Repository
public interface UtilisateurRepository extends CrudRepository<User,Long> {

	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);



}
