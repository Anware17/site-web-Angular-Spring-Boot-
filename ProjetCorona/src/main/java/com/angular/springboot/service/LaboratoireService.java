package com.angular.springboot.service;

import java.util.List;

import com.angular.springboot.model.Laboratoire;

public interface LaboratoireService {
	public List<Laboratoire> getAllNouveautes();
	public Laboratoire getLaboratoireById(long id);
	public void saveOrUpdate (Laboratoire nouveaute);
	public void delete(long id);
}
