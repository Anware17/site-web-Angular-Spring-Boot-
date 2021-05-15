package com.angular.springboot.model;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="question_test")
public class QuestionTest {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idQst ;
	public long getIdQst() {
		return idQst;
	}
	public void setIdQst(long idQst) {
		this.idQst = idQst;
	}
	public String getContenu() {
		return contenu;
	}
	public void setContenu(String contenu) {
		this.contenu = contenu;
	}
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	public QuestionTest() {
		super();
	}
	private String contenu;
	private int point ;
	
    @OneToMany(mappedBy="questionTest")
    private List<ReponseTest> reponseTest ;
}
