package com.angular.springboot.model;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name="reservation_testpcr")
public class ReservationTestPCR {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idRes ;
    private Date dateRes;
    private String heure ;
    
   public long getIdRes() {
		return idRes;
	}
	public ReservationTestPCR(long idRes, Date dateRes, String heure) {
	super();
	this.idRes = idRes;
	this.dateRes = dateRes;
	this.heure = heure;
}
	public void setIdRes(long idRes) {
		this.idRes = idRes;
	}

	public Date getDateRes() {
		return dateRes;
	}
	public void setDateRes(Date dateRes) {
		this.dateRes = dateRes;
	}
	public String getHeure() {
		return heure;
	}
	public void setHeure(String heure) {
		this.heure = heure;
	}
	public ReservationTestPCR() {
		super();
	}
	
	@JoinColumn(name="ID_User",referencedColumnName="id")
	@ManyToOne(optional=false)
	private User user;
	
	@JoinColumn(name="ID_Lab", referencedColumnName="idLab")
	@ManyToOne(optional=false)
	private Laboratoire laboratoire;

	 // @JsonBackReference
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	 // @JsonBackReference
	public Laboratoire getLaboratoire() {
		return laboratoire;
	}
	public void setLaboratoire(Laboratoire laboratoire) {
		this.laboratoire = laboratoire;
	}
	
}
