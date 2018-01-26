package com.example.demo;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.*;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Data
@Entity
public class Ballroombill {

	private @Id
	@GeneratedValue
	Long id;

	private String billId;
	private String details;
	private Long amount;
	private Date startDate;
	private Date endDate;

	private Ballroombill() {}

	public Ballroombill(String billId,Date startDate,Date endDate, String details,Long amount) {
		this.billId = billId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.details = details;
		this.amount = amount;

	}
}
