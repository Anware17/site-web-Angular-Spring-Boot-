package com.angular.springboot.service;

import java.util.List;

import com.angular.springboot.model.Nouveaute;

public interface NouveauteService {
	public List<Nouveaute> getAllNouveautes();
	public Nouveaute getNouveauteById(long id);
	public void saveOrUpdate (Nouveaute nouveaute);
	public void deleteNouveaute(long id);

}
