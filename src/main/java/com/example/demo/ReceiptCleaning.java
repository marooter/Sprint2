package com.example.demo;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;

@Data
@Entity

public class  ReceiptCleaning {

    @OneToOne
    private Customer customer;
    @OneToOne
    private Cleaning cleaning;

    private @Id @GeneratedValue Long saveReportID;
    private String receiptNum;
    private String date;
    private String time;

    public  ReceiptCleaning(){}
    public  ReceiptCleaning(String customer,String cleaning,Patient receiptNum,Employee date,String time){                                                                                        
     
        this.customer = customer;
        this.cleaning = cleaning;
        this.receiptNum = receiptNum;
        this.date = date;
        this.time = time;

    }
}
