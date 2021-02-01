package com.pranav.reactFullStack.todoAPI.Exception;

import com.pranav.reactFullStack.todoAPI.Model.response.ErrorMessages;

public class UserServiceException extends RuntimeException {

	private static final long serialVersionUID = -3407875435898845498L;

	public UserServiceException(String message) {
		super(message);
	}

	public UserServiceException(ErrorMessages missingRequiredField) {
		// TODO Auto-generated constructor stub
	}

}