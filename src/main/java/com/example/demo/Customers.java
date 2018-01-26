package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


import lombok.Data;

@Data
@Entity
public class Customers {

	private @Id @GeneratedValue Long id;



	private String billid;
	private String firstname;
	private String lastname;
	private String comapany;
  private String address;
	private String email;
	private String tel;
	private String phone;

	private Customers() {}

	public Customers(String billid,String firstname,String lastname,String comapany,String address,String email,String tel,String phone) {
		this.billid = billid;
		this.firstname = firstname;
		this.lastname = lastname;
	  this.comapany = comapany;
		this.address = address;
		this.email = email;
		this.tel = tel;
		this.phone = phone;
	}
}
