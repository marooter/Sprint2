package com.example.demo;
import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;

@Data
@Entity
public class PaymentSlip {

	private @Id
	@GeneratedValue
	Long paymentID;

	private String memberid;
	private String recordid;
	private String refid;
	private String bank;


	private PaymentSlip() {}

	public PaymentSlip(String memberid, String recordid, String refid, String bank) {

		this.memberid = memberid;
		this.recordid = recordid;
		this.refid = refid;
		this.bank = bank;



	}
}
