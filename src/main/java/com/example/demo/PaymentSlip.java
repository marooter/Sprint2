package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

import lombok.Data;

@Data
@Entity
public class PaymentSlip {

	private @Id @GeneratedValue Long paymentId;
	private String name;
	private String billid;
	private String bank;
  private Date date;
	private String time;





	private PaymentSlip() {}

	public PaymentSlip(String name,String billid,String bank,Date date,String time) {
		this.name = name;
		this.billid = billid;
		this.bank = bank;
		this.date = date;
		this.time = time;


	}
}
