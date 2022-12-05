package com.app.scaleup.ScaleupApplication.skill;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.scaleup.ScaleupApplication.tutorial.Tutorial;

public interface SkillRepository extends JpaRepository<Skill, Long> {

	Skill findByName(String name);
}
