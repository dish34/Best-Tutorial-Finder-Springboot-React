package com.app.scaleup.ScaleupApplication.tutorial;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.scaleup.ScaleupApplication.skill.Skill;
import com.app.scaleup.ScaleupApplication.skill.SkillNotFoundException;

@Component
public class TutorialService {

	@Autowired
	private TutorialRepository tutorialRepository;
	
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
	
	public void deleteSkillById(Long id) {
		tutorialRepository.deleteById(id);
	}
}
