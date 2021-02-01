package com.pranav.reactFullStack.todoAPI.Service;

import java.util.List;

import com.pranav.reactFullStack.todoAPI.Model.Todo;

public interface ITodoService {

	Todo save(Todo todo);

	List<Todo> findByUsername(String username);

	List<Todo> findAll();

	void deleteById(long id);

	Todo findById(long id);

	Todo updateUser(long id, Todo myTodo);

}
