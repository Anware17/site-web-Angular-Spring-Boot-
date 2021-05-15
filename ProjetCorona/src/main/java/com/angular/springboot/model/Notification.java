package com.angular.springboot.model;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Notification {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id_notif ;
    private String contenu ;
    
	public long getIdNotif() {
		return id_notif;
	}
	public void setIdNotif(long idNotif) {
		this.id_notif = idNotif;
	}
	public String getContenu() {
		return contenu;
	}
	public void setContenu(String contenu) {
		this.contenu = contenu;
	}

	public Notification() {
		super();
	}

	@OneToMany(mappedBy="notification")
	private List<Nouveaute> nouveaute;
	
	

}
