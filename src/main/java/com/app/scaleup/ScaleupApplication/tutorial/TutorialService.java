package com.app.scaleup.ScaleupApplication.tutorial;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.scaleup.ScaleupApplication.skill.Skill;
import com.app.scaleup.ScaleupApplication.skill.SkillNotFoundException;
import com.app.scaleup.ScaleupApplication.skill.SkillRepository;

@Component
public class TutorialService {

	@Autowired
	private TutorialRepository tutorialRepository;
	@Autowired
	private SkillRepository skillRepository;

	public List<Tutorial> retreiveAllTutorials() {
		return tutorialRepository.findAll();
	}

	public void createTutorial(Tutorial tutorial) {
		tutorialRepository.save(tutorial);
	}

	public Optional<Tutorial> findTutorialById(Long id) {
		Optional<Tutorial> tutorial = tutorialRepository.findById(id);
		if (tutorial.isEmpty()) {
			throw new TutorialNotFoundException("User not present");
		}
		return tutorial;
	}

	public List<Tutorial> findTutorialBySkillName(String name) {
		Skill skill = skillRepository.findByName(name);
		if (skill == null) {
			throw new SkillNotFoundException("Skill Not present");
		}
		return skill.getTutorial();
	}

	public void createTutorialBySkillName(String name, Tutorial tutorial) {
		Skill skill = skillRepository.findByName(name);
		if (skill == null) {
			throw new SkillNotFoundException("Skill Not present");
		}
		tutorial.setSkill(skill);
		tutorialRepository.save(tutorial);
		
	}

	public void deleteSkillById(Long id) {
		tutorialRepository.deleteById(id);
	}
}
