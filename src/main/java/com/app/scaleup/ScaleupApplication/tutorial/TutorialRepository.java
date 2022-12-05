package com.app.scaleup.ScaleupApplication.tutorial;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TutorialRepository extends JpaRepository<Tutorial, Long> {

	List<Tutorial> findBySkill(String skill);
}
