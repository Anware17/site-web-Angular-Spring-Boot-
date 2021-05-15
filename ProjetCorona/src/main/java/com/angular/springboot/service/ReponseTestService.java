package com.angular.springboot.service;

import java.util.List;

import com.angular.springboot.model.ReponseTest;

public interface ReponseTestService {
	public List<ReponseTest> getAllReponseTest();
	public ReponseTest getReponseTestById(long id);
	public void saveOrUpdate (ReponseTest reponseTest);
	public void deleteReponseTest(long id);
}
