package com.angular.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.angular.springboot.model.ReponseTest;
import com.angular.springboot.repository.ReponseTestRepository;

@Service
@Transactional

public class ReponseTestImpl implements ReponseTestService{
	@Autowired 
	ReponseTestRepository agentReponseTest ;

	@Override
	public List<ReponseTest> getAllReponseTest() {
		// TODO Auto-generated method stub
		return (List<ReponseTest>) (agentReponseTest.findAll());
	}

	@Override
	public ReponseTest getReponseTestById(long id) {
		// TODO Auto-generated method stub
		return (agentReponseTest.findById(id).get());
	}

	@Override
	public void saveOrUpdate(ReponseTest reponseTest) {
		// TODO Auto-generated method stub
		agentReponseTest.save(reponseTest);
	}

	@Override
	public void deleteReponseTest(long id) {
		// TODO Auto-generated method stub
		agentReponseTest.deleteById(id);
	}
}
