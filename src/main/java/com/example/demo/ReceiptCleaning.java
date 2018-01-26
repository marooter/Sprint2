package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import java.util.Date;

@Data
@Entity
public class ReceiptCleaning {

	private @Id @GeneratedValue Long id;
	private String fname;
	private String lname;
	private String location;
	private String telnum;
	private String note;
	private String roomnumber;
	private Date date;
	private String time;

	private ReceiptCleaning() {}

	public ReceiptCleaning(String fname,String lname,String location,String telnum, String note,String roomnumber,Date date,String time) {
		this.fname = fname;
		this.lname = lname;
		this.location = location;
		this.telnum = telnum;
		this.note = note;
		this.roomnumber = roomnumber;
		this.date = date;
	 	this.time = time;


	}
}