package com.example.demo;
import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Ballroom {

	private @Id
	@GeneratedValue
	Long id;
	private String roomName;
  private String support;


	private Ballroom() {}

	public Ballroom(String roomName,String support) {

		this.roomName = roomName;
		this.support = support;

	}
}
