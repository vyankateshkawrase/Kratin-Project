package com.kratin.MedicationRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kratin.entity.Medication;

public interface MedicationRepository extends JpaRepository<Medication, Long> 
{

}