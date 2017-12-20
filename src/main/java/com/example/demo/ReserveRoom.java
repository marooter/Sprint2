package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class ReserveRoom {

	private @Id @GeneratedValue Long id;
	private String roomname;
	private String roomnumber;
	private Double roomprice;

	private ReserveRoom() {}

	public ReserveRoom(String roomname,String roomnumber,Double roomprice) {
		this.roomname = roomname;
		this.roomnumber = roomnumber;
		this.roomprice = roomprice;
	}
}
