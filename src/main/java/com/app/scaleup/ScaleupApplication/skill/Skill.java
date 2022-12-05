package com.app.scaleup.ScaleupApplication.skill;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.app.scaleup.ScaleupApplication.tutorial.Tutorial;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Skill {

	protected Skill() {

	}

	@Id
	@GeneratedValue
	private long id;

	private String name;

	@JsonIgnore
	@OneToMany(mappedBy="skill")
	private List<Tutorial> tutorial;
	
	public Skill(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
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
