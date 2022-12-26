package com.app.scaleup.ScaleupApplication.skill;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.app.scaleup.ScaleupApplication.tutorial.Tutorial;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Skill {

	protected Skill() {

	}

	@Id
	@GeneratedValue
	private Long id;

	@NotEmpty(message = "Skill Name is required")
	@Size(min=2, max=100, message="Length of characters can be between from 2 to 100.")
	private String name;

	@JsonIgnore
	@OneToMany(mappedBy="skill")
	private List<Tutorial> tutorial;
	
	public Skill(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Tutorial> getTutorial() {
		return tutorial;
	}

	public void setTutorial(List<Tutorial> tutorial) {
		this.tutorial = tutorial;
	}

}
