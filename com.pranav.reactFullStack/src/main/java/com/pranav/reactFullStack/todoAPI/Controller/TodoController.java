package com.pranav.reactFullStack.todoAPI.Controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.pranav.reactFullStack.todoAPI.Model.HelloWorldBean;
import com.pranav.reactFullStack.todoAPI.Model.Todo;
import com.pranav.reactFullStack.todoAPI.Model.response.OperationStatusModel;
import com.pranav.reactFullStack.todoAPI.Model.response.RequestOperationName;
import com.pranav.reactFullStack.todoAPI.Model.response.RequestOperationStatus;
import com.pranav.reactFullStack.todoAPI.Service.ITodoService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

	@Autowired
	private ITodoService service;

	@PostMapping(path = "/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {

		todo.setUsername(username);
		Todo newTodo = service.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newTodo.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

	@GetMapping(path = "/users/{username}/todos")
	public List<Todo> getTodoByUsername(@PathVariable String username) {
		List<Todo> todoUser = service.findByUsername(username);
		return todoUser;
	}
	
	@GetMapping(path = "/users/{username}/todos/{id}")
	public Todo getTodoById(@PathVariable long id) {
		Todo todoUser = service.findById(id);
		return todoUser;
	}

	@GetMapping(path = "/users/{username}/allDetails")
	public List<Todo> getAllUsers() {
		List<Todo> findAll = service.findAll();
		return findAll;
	}

	@DeleteMapping(path = "/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {

		service.deleteById(id);

		return ResponseEntity.noContent().build();
	}

	@DeleteMapping(path = "/user/todos/{id}")
	public OperationStatusModel deleteMyTodo(@PathVariable long id) {
		OperationStatusModel returnValue = new OperationStatusModel();
		returnValue.setOperationName(RequestOperationName.DELETE.name());
		service.deleteById(id);
		returnValue.setOprationResult(RequestOperationStatus.SUCCESS.name());

		return returnValue;
	}

	@PutMapping(path = "users/{id}")
	public Todo updateUser(@PathVariable long id, @RequestBody Todo todoDetails) {

		todoDetails = service.updateUser(id, todoDetails);
		return todoDetails;
	}
	
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		//throw new RuntimeException("Something went wrong");
		return new HelloWorldBean(String.format("Hello, %s", name));
	}

}
