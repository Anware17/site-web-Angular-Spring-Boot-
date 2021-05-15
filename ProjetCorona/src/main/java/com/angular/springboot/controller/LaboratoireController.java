package com.angular.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angular.springboot.exception.ResourceNotFoundException;
import com.angular.springboot.model.Laboratoire;
import com.angular.springboot.repository.LaboratoireRepository;



	@RestController
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/api/v1/")
	public class LaboratoireController {

			@Autowired
			private LaboratoireRepository laboratoireRepository ;
			
			//get all reservations
			@GetMapping("/laboratoire")
			public List<Laboratoire> getAllReservations(){
			return (List<Laboratoire>) laboratoireRepository.findAll() ;
			}
			
			//create reservation rest api
			@PostMapping("/laboratoire")
			public Laboratoire createLabo(@RequestBody Laboratoire laboratoire) {
				return laboratoireRepository.save(laboratoire);
			}
			
		/*	//get all reservations
			@GetMapping("/laboratoire")
			public List<Laboratoire> getLabByNom(String nom){
			return (List<Laboratoire>) laboratoireRepository.findByNom(nom) ;
			}*/
			
			// get employee by id rest api
			@GetMapping("/laboratoire/{idLab}")
			public ResponseEntity<Laboratoire> getLaboratoireById(@PathVariable Long idLab) {
				Laboratoire laboratoire = laboratoireRepository.findById(idLab)
						.orElseThrow(() -> new ResourceNotFoundException("Laboratoire not exist with idLab :" + idLab));
				return ResponseEntity.ok(laboratoire);
			}
			
			// update employee rest api
			
			@PutMapping("/laboratoire/{idLab}")
			public ResponseEntity<Laboratoire> updateLaboratoire(@PathVariable Long idLab, @RequestBody Laboratoire laboDetails){
				Laboratoire laboratoire = laboratoireRepository.findById(idLab)
						.orElseThrow(() -> new ResourceNotFoundException("Laborartoire not exist with idLab :" + idLab));
				
				laboratoire.setNom(laboDetails.getNom());
				laboratoire.setAdresse(laboDetails.getAdresse());
				laboratoire.setNumTel(laboDetails.getNumTel());
				
				Laboratoire updatedLaboratoire = laboratoireRepository.save(laboratoire);
				return ResponseEntity.ok(updatedLaboratoire);
			}
			
			// delete employee rest api
			@DeleteMapping("/laboratoire/{idLab}")
			public ResponseEntity<Map<String, Boolean>> deleteLaboratoire(@PathVariable Long idLab){
				Laboratoire laboratoire = laboratoireRepository.findById(idLab)
						.orElseThrow(() -> new ResourceNotFoundException("laboratoire not exist with id :" + idLab));
				
				laboratoireRepository.delete(laboratoire);
				Map<String, Boolean> response = new HashMap<>();
				response.put("deleted", Boolean.TRUE);
				return ResponseEntity.ok(response);
			}
			
}
