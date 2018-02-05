package com.example.demo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Pattern;


import lombok.Data;

@Data
@Entity
public class Customers {

	private @Id @GeneratedValue Long id;

	private String name;
  	private String address;

	@Pattern(regexp = "d{A,Z}")
	private String email;

	@Pattern(regexp = "0\\d{8,9}")
	private String phone;

	private Customers() {}

	public Customers(String name,String address,String email,String phone) {
		
		this.name = name;
		this.address = address;
		this.email = email;
		this.phone = phone;
	}
}
