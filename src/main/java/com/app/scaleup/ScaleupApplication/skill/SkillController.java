package com.app.scaleup.ScaleupApplication.skill;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SkillController {

	@Autowired
	private SkillService skillService;
	
	@GetMapping("/skills")
	public List<Skill> getAllSkills() {
		return skillService.retreiveAllSkills();
	}
	
	@GetMapping("/skills/{id}")
	public Optional<Skill> getSkillById(@PathVariable Long id) {
		return skillService.findSkillById(id);
	}
	
	@PostMapping("/skills")
	public void postSkill(@RequestBody Skill skill) {
		skillService.createSkill(skill);
	}
	
	@DeleteMapping("/skiills/{id}")
	public void deleteSkillById(@PathVariable Long id) {
		skillService.deleteSkillById(id);
	}
}
