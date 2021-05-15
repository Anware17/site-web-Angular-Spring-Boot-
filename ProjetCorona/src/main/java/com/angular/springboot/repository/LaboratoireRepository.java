package com.angular.springboot.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.angular.springboot.model.Laboratoire;



public interface LaboratoireRepository extends CrudRepository<Laboratoire,Long> {
     
	public List<Laboratoire> findByNom(String nom);
}
