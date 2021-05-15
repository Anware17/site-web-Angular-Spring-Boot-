package com.angular.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angular.springboot.model.ReservationTestPCR;
import com.angular.springboot.repository.ReservationTestPCRRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/")
public class ReservationTestPCRController {
		@Autowired
		private ReservationTestPCRRepository reservationTestPCRRepository ;
		
		//get all reservations
		@GetMapping("/reservation_testpcr")
		public List<ReservationTestPCR> getAllReservations(){
		return reservationTestPCRRepository.findAll() ;
		}
		
		//create reservation rest api
		@PostMapping("/reservation_testpcr")
		public ReservationTestPCR createReservation(@RequestBody ReservationTestPCR reservationTestPCR) {
			
			return reservationTestPCRRepository.save(reservationTestPCR);
		}
		
}
