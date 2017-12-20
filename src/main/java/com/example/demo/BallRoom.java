package com.example.demo;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;


@Data
@Entity
public class BallRoom {

	private @Id @GeneratedValue Long id;
	private String roomNum;
    private Integer floor;
    private Integer Support;
    private Double price;


	private BallRoom() {}

	public BallRoom(String roomNum,Integer floor,Integer Support,Double price) {
		this.roomNum = roomNum;
		this.floor = floor;
		this.Support = Support;
		this.price = price;

	}
}