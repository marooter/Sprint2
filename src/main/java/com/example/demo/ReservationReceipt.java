package com.example.demo;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.*;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import javax.persistence.*;

@Data
@Entity
public class ReservationReceipt {

    private @Id @GeneratedValue  Long id;
    private String billid;

    @OneToOne
    private Room nameroom;

    private Double price;

    @OneToOne
    private Roomnumber roomnumber;

    private Date date = new Date();
    private String name;



    private ReservationReceipt() {}
    
    public ReservationReceipt(String billid,String name,Room nameroom,Roomnumber roomnumber,String date,Double price){
        SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        this.billid = billid;
        this.name = name;
        this.nameroom = nameroom;
        this.roomnumber = roomnumber;
        this.price = price;
        Date dates = new Date();
        String test = df.format(this.date);

        try {
            this.date = df.parse(test);
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
