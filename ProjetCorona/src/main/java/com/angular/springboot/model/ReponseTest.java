package com.angular.springboot.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="reponse_test")
public class ReponseTest {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idRep ;
	private int score ;
	
	public long getIdRep() {
		return idRep;
	}

	public void setIdRep(long idRep) {
		this.idRep = idRep;
	}

	public int getScore() {
		return score;
	}

	public QuestionTest getQuestion() {
		return questionTest;
	}

	public void setQuestion(QuestionTest question) {
		this.questionTest = question;
	}

	public TestCorona getTestCorona() {
		return testCorona;
	}

	public void setTestCorona(TestCorona testCorona) {
		this.testCorona = testCorona;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public ReponseTest() {
		super();
	}
	@JoinColumn(name="ID_Question",referencedColumnName="idQst")
	@ManyToOne(optional=false)
	private QuestionTest questionTest;
	
	@JoinColumn(name="ID_TestCorona", referencedColumnName="idTest")
	@ManyToOne(optional=false)
	private TestCorona testCorona;
}
