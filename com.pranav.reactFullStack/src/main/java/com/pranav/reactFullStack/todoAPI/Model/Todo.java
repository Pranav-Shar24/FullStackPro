package com.pranav.reactFullStack.todoAPI.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;

@Entity
@Table(name = "myTodo")
public class Todo {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;
	@Column(name = "user_name")
	private String username;
	@Column(name = "description")
	private String description;
	@Column(name = "target_date")
	@CreatedDate
	private Date targetDate = new Date();
	@Column(name = "status")

	private boolean isComplete;

	public Todo() {
		// TODO Auto-generated constructor stub

	}

	public Todo(long id, String username, String description, Date targetDate, boolean isComplete) {
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.isComplete = isComplete;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	public boolean isComplete() {
		return isComplete;
	}

	public void setComplete(boolean isComplete) {
		this.isComplete = isComplete;
	}

}
