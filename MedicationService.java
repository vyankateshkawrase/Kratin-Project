package com.kratin.MedicationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kratin.MedicationRepository.MedicationRepository;
import com.kratin.entity.Medication;

import java.util.List;

@Service
public class MedicationService 
{
    private final MedicationRepository medicationRepository;

    @Autowired
    public MedicationService(MedicationRepository medicationRepository) 
    {
        this.medicationRepository = medicationRepository;
    }

    public List<Medication> getAllMedications() 
    {
        return medicationRepository.findAll();
    }
}