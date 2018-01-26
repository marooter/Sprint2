package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Date;
import lombok.Data;

@Data
@Entity
public class PaymentSlip {

	private @Id @GeneratedValue Long paymentId;


	private String billID;
	private String name;
	private String bank;
	private String time;
	private Date date;



	private PaymentSlip() {}

	public PaymentSlip(String billID,String name,String bank,String time,Date date) {
		this.billID = billID;
		this.name = name;
		this.bank = bank;
		this.time = time;
		this.date = date;
		

	}
}
