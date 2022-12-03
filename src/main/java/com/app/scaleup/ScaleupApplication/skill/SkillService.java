package com.app.scaleup.ScaleupApplication.skill;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SkillService {

	@Autowired
	private SkillRepository skillRepository;

	public List<Skill> retreiveAllSkills() {
		return skillRepository.findAll();
	}

	public void createSkill(Skill skill) {
		skillRepository.save(skill);
	}
	
	public Optional<Skill> findSkillById(Long id) {
		Optional<Skill> skill = skillRepository.findById(id);
		return skill;
	}
	
	public void deleteSkillById(Long id) {
		skillRepository.deleteById(id);
	}
}
