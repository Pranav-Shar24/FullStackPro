package com.pranav.reactFullStack.todoAPI.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pranav.reactFullStack.todoAPI.Model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

	List<Todo> findByUsername(String username);

	Todo findById(long id);

}
