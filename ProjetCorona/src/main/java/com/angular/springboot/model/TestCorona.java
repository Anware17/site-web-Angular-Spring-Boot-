package com.angular.springboot.model;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="test_corona")
public class TestCorona {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idTest ;
    private String resultat ;
	public long getIdTest() {
		return idTest;
	}
	public void setIdTest(long idTest) {
		this.idTest = idTest;
	}
	public String getResultat() {
		return resultat;
	}
	public void setResultat(String resultat) {
		this.resultat = resultat;
	}
	public TestCorona() {
		super();
	}

    @OneToMany(mappedBy="testCorona")
    private List<ReponseTest> reponseTest ;
}
