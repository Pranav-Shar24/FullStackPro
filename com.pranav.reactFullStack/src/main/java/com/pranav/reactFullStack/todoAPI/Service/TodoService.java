package com.pranav.reactFullStack.todoAPI.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pranav.reactFullStack.todoAPI.Exception.UserServiceException;
import com.pranav.reactFullStack.todoAPI.Model.Todo;
import com.pranav.reactFullStack.todoAPI.Model.response.ErrorMessages;
import com.pranav.reactFullStack.todoAPI.Repo.TodoRepository;

@Service
public class TodoService implements ITodoService {

	@Autowired
	private TodoRepository repo;

	public Todo save(Todo todo) {
		Todo createTodo = repo.save(todo);
		return createTodo;
	}

	@Override
	public List<Todo> findByUsername(String username) {
		List<Todo> todoUser = repo.findByUsername(username);
		return todoUser;
	}

	@Override
	public List<Todo> findAll() {
		List<Todo> findAll = repo.findAll();
		return findAll;
	}

	@Override
	public void deleteById(long id) {
		Todo findById = repo.findById(id);
		if (findById != null) {
			repo.deleteById(id);
		}

	}

	@Override
	public Todo updateUser(long id, Todo myTodo) {
		boolean status = false;
		Todo tempTodo;
		tempTodo = repo.findById(id);
		if (tempTodo == null) {
			throw new UserServiceException(ErrorMessages.NO_RECORD_FOUND.getErrorMessages());
		} else {
			status = true;
			myTodo.setUsername(tempTodo.getUsername());
			myTodo.setDescription(myTodo.getDescription());
			myTodo.setTargetDate(myTodo.getTargetDate());
			myTodo.setComplete(tempTodo.isComplete());
			Todo updatedValue = repo.save(myTodo);
			return updatedValue;
		}

	}

	@Override
	public Todo findById(long id) {
		return repo.findById(id);
	}
}
