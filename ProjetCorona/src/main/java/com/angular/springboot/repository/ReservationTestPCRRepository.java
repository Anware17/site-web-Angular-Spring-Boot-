package com.angular.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angular.springboot.model.ReservationTestPCR;

@Repository
public interface ReservationTestPCRRepository extends JpaRepository<ReservationTestPCR,Long> {

}
