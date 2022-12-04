package com.app.scaleup.ScaleupApplication.skill;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class SkillNotFoundException extends RuntimeException {

	public SkillNotFoundException(String message) {
		super(message);
	}
}
