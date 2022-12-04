package com.app.scaleup.ScaleupApplication.tutorial;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.scaleup.ScaleupApplication.skill.Skill;

@RestController
public class TutorialController {

	@Autowired
	private TutorialService tutorialService;
	
	@GetMapping("/tutorials")
	public List<Tutorial> getAllTutorials() {
		return tutorialService.retreiveAllTutorials();
	}
	
	@GetMapping("/tutorials/{tutorialId}")
	public Optional<Tutorial> getSkillById(@PathVariable Long tutorialId) {
		return tutorialService.findTutorialById(tutorialId);
	}
	
	@PostMapping("/tutorials")
	public void postSkill(@RequestBody Tutorial tutorial) {
		tutorialService.createTutorial(tutorial);
	}

}
