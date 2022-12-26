package com.app.scaleup.ScaleupApplication.tutorial;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.app.scaleup.ScaleupApplication.skill.Skill;

@Entity
public class Tutorial {

	protected Tutorial() {

	}

	@Id
	@GeneratedValue
	private Long id;
	
	@NotEmpty(message = "Name is required")
	@Size(min=2, max=100, message = "The length of full name must be between 2 and 100 characters.")
	private String name;
	
	@NotEmpty(message = "Url is required")
	@Pattern(regexp = "https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,}", message = "Url should be valid")
	private String url;
	
	@NotEmpty(message = "Tutorial Provider is required")
	@Size(min=2, max=100, message="The length of full name must be between 2 and 100 characters.")
	private String provider;
	
	@NotNull(message ="Tuorial is paid is required")
	private boolean paid;
	
	@NotNull(message ="Tutorial upvotes is required")
	private Long upvotes = 0l;
	
	@Valid
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	private Skill skill;
	
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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getProvider() {
		return provider;
	}

	public void setProvider(String provider) {
		this.provider = provider;
	}

	public boolean isPaid() {
		return paid;
	}

	public void setPaid(boolean paid) {
		this.paid = paid;
	}

	public Long getUpvotes() {
		return upvotes;
	}

	public void setUpvotes(Long upvotes) {
		this.upvotes = upvotes;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

}
