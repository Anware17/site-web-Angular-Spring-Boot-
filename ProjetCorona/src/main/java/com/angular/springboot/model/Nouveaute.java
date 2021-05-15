package com.angular.springboot.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Nouveaute {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private long idNouv ;
	
	@JoinColumn(name="ID_Notif",referencedColumnName="id_notif")
	@ManyToOne(optional=false)
	private Notification notification;
	
	
    public Notification getNotification() {
		return notification;
	}
	public void setNotification(Notification notification) {
		this.notification = notification;
	}
	public long getIdNouv() {
		return idNouv;
	}
	public void setIdNouv(long idNouv) {
		this.idNouv = idNouv;
	}
	public int getNbrCasPos() {
		return nbrCasPos;
	}
	public void setNbrCasPos(int nbrCasPos) {
		this.nbrCasPos = nbrCasPos;
	}
	public int getNbrCasDeces() {
		return nbrCasDeces;
	}
	public void setNbrCasDeces(int nbrCasDeces) {
		this.nbrCasDeces = nbrCasDeces;
	}
	public String getZoneV() {
		return zoneV;
	}
	public void setZoneV(String zoneV) {
		this.zoneV = zoneV;
	}
	public String getZoneO() {
		return zoneO;
	}
	public void setZoneO(String zoneO) {
		this.zoneO = zoneO;
	}
	public String getZoneR() {
		return zoneR;
	}
	public void setZoneR(String zoneR) {
		this.zoneR = zoneR;
	}
	public Nouveaute() {
		super();
	}
	private int nbrCasPos;
    private int nbrCasDeces;
    private String zoneV;
    private String zoneO;
    private String zoneR;
}
