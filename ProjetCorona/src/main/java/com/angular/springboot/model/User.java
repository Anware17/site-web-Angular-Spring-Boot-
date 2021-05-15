package com.angular.springboot.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Table(name="utilisateurs",
uniqueConstraints = { 
	@UniqueConstraint(columnNames = "username"),
	@UniqueConstraint(columnNames = "email") 
}
)
public class User {
	/*@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id ;
	private String username ;
	private String prenom;
    private String email ;
    private String adresse ;
    private int age ;
    private String password ;
    
    @ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
    
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getprenom() {
		return prenom;
	}
	public void setprenom(String prenom) {
		this.prenom = prenom;
	}
	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Utilisateur() {
		super();
	}
	
	public Utilisateur(String username, String email,String password) {
		
		this.username = username;
		this.email = email;
		this.password = password;
	}
	public Utilisateur(long id, String username, String prenom, List<ReservationTestPCR> rsvTestPCR) {
		super();
		this.id = id;
		this.username = username;
		this.prenom = prenom;
		this.rsvTestPCR = rsvTestPCR;
	}
	public Utilisateur(long id, String username, String prenom) {
		super();
		this.id = id;
		this.username = username;
		this.prenom = prenom;
	}*/
	@Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private long id;
	  @NotBlank
	  @Size(max = 20)
	  private String username;
	  @NotBlank
	  @Size(max = 20)
	  @Email
	  private String email;
	  private String password;
	  private String role;
	 
	 
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", role=" + role + ", username=" + username + ", password="
				+ password + "]";
	}
	public User(String username, String email, String password, String role) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.role = role;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	@OneToMany(cascade = CascadeType.ALL, mappedBy="user",fetch = FetchType.LAZY)
    private List<ReservationTestPCR> rsvTestPCR ;
	
	public List<ReservationTestPCR> getRsvTestPCR() {
		return rsvTestPCR;
	}

	public void setRsvTestPCR(List<ReservationTestPCR> rsvTestPCR) {
		this.rsvTestPCR = rsvTestPCR;
	}

}
