package com.angular.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.angular.springboot.model.Laboratoire;
import com.angular.springboot.repository.LaboratoireRepository;


@Service
@Transactional
public class LaboratoireServiceImpl implements LaboratoireService{
	@Autowired 
	LaboratoireRepository agentLaboratoire ;

	@Override
	public List<Laboratoire> getAllNouveautes() {
		// TODO Auto-generated method stub
		return (List<Laboratoire>) (agentLaboratoire.findAll());
	}

	@Override
	public Laboratoire getLaboratoireById(long id) {
		// TODO Auto-generated method stub
		return (agentLaboratoire.findById(id).get());
	}

	@Override
	public void saveOrUpdate(Laboratoire laboratoire) {
		// TODO Auto-generated method stub
		agentLaboratoire.save(laboratoire);
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		agentLaboratoire.deleteById(id);
	}
	
}
