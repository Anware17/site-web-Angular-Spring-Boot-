package com.angular.springboot.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.angular.springboot.domaine.JwtResponse;
import com.angular.springboot.domaine.Message;
import com.angular.springboot.exception.ResourceNotFoundException;
import com.angular.springboot.model.ReservationTestPCR;
import com.angular.springboot.model.User;
import com.angular.springboot.repository.ReservationTestPCRRepository;
import com.angular.springboot.repository.UtilisateurRepository;
import com.angular.springboot.request.LoginRequest;
import com.angular.springboot.request.RegisterRequest;
import com.angular.springboot.service.UserDetailsImpl;


/*
@RestController
@CrossOrigin()
@RequestMapping("api/utilisateur")
public class UtilisateurController {


	    @Autowired
	    private UtilisateurService utilisateurService;

	    @PostMapping("/addUser")
	    public ResponseEntity<Utilisateur> addUtilisateur(@RequestBody Utilisateur utilisateur) {
	        return new ResponseEntity<Utilisateur>(utilisateurService.saveOrUpdate(utilisateur), HttpStatus.CREATED);
	    }

	   /* @GetMapping("/all")
	    public Iterable<Utilisateur> getAllBookings(){
	        return UtilisateurService.findAll();
	    }

	    @GetMapping("/{utilisateurId}")
	    public ResponseEntity<Utilisateur> getBookingById(@PathVariable Long bookId) {
	        return new ResponseEntity<Utilisateur>(utilisateurService.findUtilisateurById(bookId), HttpStatus.OK);
	    }
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/")
public class UserController {

		@Autowired
		private UtilisateurRepository utilisateurRepository ;
		
		//get all reservations
		@GetMapping("/utilisateur")
		public List<User> getAllReservations(){
		return (List<User>) utilisateurRepository.findAll() ;
		}
		
		//create reservation rest api
		@PostMapping("/utilisateur")
		public User createUser(@RequestBody User utilisateur) {
			return utilisateurRepository.save(utilisateur);
		}*/
		
//@CrossOrigin(origins = "*", maxAge = 3600)
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api")
public class UserController {
	@Autowired 	UtilisateurRepository repository;
	@Autowired 	AuthenticationManager authenticationManager;

	@Autowired	UtilisateurRepository userRepository;

	@Autowired	PasswordEncoder encoder;

	@Autowired	com.angular.springboot.config.JwtTokenUtil jwtUtils;

	 @GetMapping("/utilisateurs")
	  public List<User> getAllUtilisateur() {
	    System.out.println("Get all Utilisateur...");
	 
	    List<User> Utilisateur = new ArrayList<>();
	    repository.findAll().forEach(Utilisateur::add);
	 
	    return Utilisateur;
	  }
	
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUtilisateurById(@PathVariable(value = "id") Long UtilisateurId)
			throws ResourceNotFoundException {
		User Utilisateur = repository.findById(UtilisateurId)
				.orElseThrow(() -> new ResourceNotFoundException("Utilisateur not found for this id :: " + UtilisateurId));
		return ResponseEntity.ok().body(Utilisateur);
	}

	 
	
	
	
		@DeleteMapping("/utilisateurs/{id}")
	public Map<String, Boolean> deleteUtilisateur(@PathVariable(value = "id") Long UtilisateurId)
			throws ResourceNotFoundException {
		User Utilisateur = repository.findById(UtilisateurId)
				.orElseThrow(() -> new ResourceNotFoundException("Utilisateur not found  id :: " + UtilisateurId));

		repository.delete(Utilisateur);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	  
	 
	  @DeleteMapping("/users/delete")
	  public ResponseEntity<String> deleteAllUtilisateur() {
	    System.out.println("Delete All Utilisateur...");
	 
	    repository.deleteAll();
	 
	    return new ResponseEntity<>("All Utilisateurs have been deleted!", HttpStatus.OK);
	  }
	 
	

	  @PutMapping("/utilisateurs/{id}")
	  public ResponseEntity<User> updateUtilisateur(@PathVariable("id") long id, @RequestBody User Utilisateur) {
	    System.out.println("Update Utilisateur with ID = " + id + "...");
	 
	    Optional<User> UtilisateurInfo = repository.findById(id);
	 
	    if (UtilisateurInfo.isPresent()) {
	    	User utilisateur = UtilisateurInfo.get();
	    	utilisateur.setRole(Utilisateur.getRole());
	    	utilisateur.setEmail(Utilisateur.getEmail());
	    	utilisateur.setUsername(Utilisateur.getUsername());
	    	utilisateur.setPassword(Utilisateur.getPassword());
	      return new ResponseEntity<>(repository.save(Utilisateur), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	  
	  @CrossOrigin(origins = "http://localhost:4200")
		//@PostMapping("/utilisateurs/login")
		@RequestMapping(value="/utilisateurs/login" , method=RequestMethod.POST)
		public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest data) {
			System.out.println("aaaa");
			System.out.println(data.getPassword());
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
							data.getUsername(),
							data.getPassword())
				
					);
			  System.out.println("bbbbb");
			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);
			
			UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
			

			return ResponseEntity.ok(new JwtResponse(jwt, 
													 userDetails.getId(), 
													 userDetails.getUsername(), 
													 userDetails.getEmail(), 
													 userDetails.getRole()));
		}

		//@PostMapping("/utilisateurs/register")
		
		@RequestMapping(value="/utilisateurs/register" , method=RequestMethod.POST)
		public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest signUpRequest) {
			if (userRepository.existsByUsername(signUpRequest.getUsername())) {
				return ResponseEntity
						.badRequest()
						.body(new Message("Error: Username is already taken!"));
			}

			if (userRepository.existsByEmail(signUpRequest.getEmail())) {
				return ResponseEntity
						.badRequest()
						.body(new Message("Error: Email is already in use!"));
			}

			// Create new user's account
			User user = new User(signUpRequest.getUsername(), 
								 signUpRequest.getEmail(),
								 encoder.encode(signUpRequest.getPassword()),
										 signUpRequest.getRole()		 );
			userRepository.save(user);

			return ResponseEntity.ok(new Message("User registered successfully!"));
		}	  
	
}
