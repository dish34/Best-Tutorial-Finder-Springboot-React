package com.app.scaleup.ScaleupApplication.tutorial;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.scaleup.ScaleupApplication.skill.Skill;

@RestController
@CrossOrigin
public class TutorialController {

	@Autowired
	private TutorialService tutorialService;
	
//	@GetMapping("/tutorials")
//	public List<Tutorial> getAllTutorials() {
//		return tutorialService.retreiveAllTutorials();
//	}
	
//	@GetMapping("/tutorials/{tutorialId}")
//	public Optional<Tutorial> getSkillById(@PathVariable Long tutorialId) {
//		return tutorialService.findTutorialById(tutorialId);
//	}
	
	@GetMapping("/tutorials/{skillName}")
	public List<Tutorial> getTutorialsBySkillName(@PathVariable String skillName)
	{
		return tutorialService.findTutorialBySkillName(skillName);
	}
	
	@PostMapping("/tutorials/{skillName}")
	public void postTutorialBySkillName(@PathVariable String skillName, @RequestBody Tutorial tutorial)
	{
		tutorialService.createTutorialBySkillName(skillName, tutorial);
	}
	
	@PostMapping("/tutorials")
	public void postSkill(@Valid @RequestBody Tutorial tutorial) {
		tutorialService.createTutorial(tutorial);
	}

}
