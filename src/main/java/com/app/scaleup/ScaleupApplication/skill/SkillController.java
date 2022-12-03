package com.app.scaleup.ScaleupApplication.skill;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SkillController {

	private SkillRepository skillRepository;
	
	@GetMapping("/skills")
	public List<Skill> getSkills() {
		return skillRepository.findAll();
	}
}
