package com.angular.springboot.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.angular.springboot.model.Nouveaute;
import com.angular.springboot.repository.NouveauteRepository;

@Service
@Transactional
public class NouveauteServiceImpl implements NouveauteService {
	@Autowired 
	NouveauteRepository agentNouveaute ;

	@Override
	public List<Nouveaute> getAllNouveautes() {
		// TODO Auto-generated method stub
		return (List<Nouveaute>) (agentNouveaute.findAll());
	}

	@Override
	public Nouveaute getNouveauteById(long id) {
		// TODO Auto-generated method stub
		return (agentNouveaute.findById(id).get());
	}

	@Override
	public void saveOrUpdate(Nouveaute nouveaute) {
		// TODO Auto-generated method stub
		agentNouveaute.save(nouveaute);
	}

	@Override
	public void deleteNouveaute(long id) {
		// TODO Auto-generated method stub
		agentNouveaute.deleteById(id);
	}

}
