package com.kratin.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Medication 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String dosage;
    private String frequency;
    private String timing;
	public Medication(Long id, String name, String dosage, String frequency, String timing) 
	{
		super();
		this.id = id;
		this.name = name;
		this.dosage = dosage;
		this.frequency = frequency;
		this.timing = timing;
	}
	public Medication() 
	{
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() 
	{
		return id;
	}
	public void setId(Long id) 
	{
		this.id = id;
	}
	public String getName() 
	{
		return name;
	}
	public void setName(String name) 
	{
		this.name = name;
	}
	public String getDosage() 
	{
		return dosage;
	}
	public void setDosage(String dosage) 
	{
		this.dosage = dosage;
	}
	public String getFrequency() 
	{
		return frequency;
	}
	public void setFrequency(String frequency) 
	{
		this.frequency = frequency;
	}
	public String getTiming() 
	{
		return timing;
	}
	public void setTiming(String timing) 
	{
		this.timing = timing;
	}
	@Override
	public String toString() 
	{
		return "Medication [id=" + id + ", name=" + name + ", dosage=" + dosage + ", frequency=" + frequency
				+ ", timing=" + timing + "]";
	}
}