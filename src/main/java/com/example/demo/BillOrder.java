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
import javax.print.DocFlavor.STRING;
import javax.validation.constraints.NotNull;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import javax.persistence.*;

@Data
@Entity
public class BillOrder {

    private @Id @GeneratedValue  Long id;
    
    private String billId;
    private String name;
    private String roomnumber;
    private String food;
    private String drink;
    private Date date = new Date();

    private BillOrder() {}
    
    public BillOrder(String billId,String name,String roomnumber,String food,String drink,String date){
        SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        this.billId = billId;
        this.name = name;
        this.roomnumber = roomnumber;
        this.food = food;
        this.drink = drink;
        Date dates = new Date();
        String test = df.format(this.date);

        try {
            this.date = df.parse(test);
        } catch (ParseException e) {
            e.printStackTrace();
        }
 
    }
}
