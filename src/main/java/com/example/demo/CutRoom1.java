package com.example.demo;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.*;

import lombok.Data;

@Data
@Entity
public class CutRoom {

	private @Id @GeneratedValue Long id;

	@ManyToOne
	private Reserve receipt;

	private String username;
	private String userid;
	private String roomType;
	private String status;

	private CutRoom() {}
	public CutRoom(Reserve receipt,String username, String userid,String status,String roomType) {
		this.username = username;
		this.userid = userid;
		this.receipt = receipt;
		this.roomType = roomType;
		this.status = status;

	}
}

