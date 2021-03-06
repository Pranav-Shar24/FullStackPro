package com.pranav.basicAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthController {

	@GetMapping(path = "/basicAuth")
	public AuthenticationBean basicAuthBean() {
		// throw new RuntimeException("Some Error has Happened! Contact Support at
		// ***-***");
		return new AuthenticationBean("You are authenticated");
	}
}
