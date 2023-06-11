package com.kratin.MedicationController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kratin.MedicationService.MedicationService;
import com.kratin.entity.Medication;

import java.util.List;

@CrossOrigin("http://localhost:8000/api/medications")
@RestController
@RequestMapping("/api")
public class MedicationController {
    private final MedicationService medicationService;

    @Autowired
    public MedicationController(MedicationService medicationService) {
        this.medicationService = medicationService;
    }

    @GetMapping("/medications")
    public List<Medication> getMedications() {
        return medicationService.getAllMedications();
    }
}