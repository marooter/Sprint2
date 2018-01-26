package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Roomnumber {

	private @Id @GeneratedValue Long id;
	private String roomnumber;


	private Roomnumber() {}
	public Roomnumber(String roomnumber) {
		this.roomnumber = roomnumber;
	}
}