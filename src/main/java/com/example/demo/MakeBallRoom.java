package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.Calendar;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.text.SimpleDateFormat;
import java.text.ParseException;

@Controller
public class MakeBallRoom {

    @Autowired
    CustomersRepository customersRepository;
    @Autowired
    BallroombillRepository ballroombillRepository;

    @ResponseBody
    @RequestMapping(path = "/firstname/{firstname}/lastname/{lastname}/company/{co}/address/{ad}/email/{em}/tel/{tel}/phone/{phone}/job/{job}/amount/{amount}/startdate/{sDate}/enddate/{eDate}/billid/{billid}", method = RequestMethod.GET)
    public String customers(@PathVariable String firstname,@PathVariable String lastname,
                            @PathVariable String co,
                            @PathVariable String ad,
                            @PathVariable String em,
                            @PathVariable String tel,
                            @PathVariable String phone,
                            @PathVariable String job,
                            @PathVariable Long amount,
                            @PathVariable String sDate,
                            @PathVariable String eDate,
                            @PathVariable String billid
                            ) {

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        Date enddate = new Date();
        try {
            date = formatter.parse(sDate);
            enddate = formatter.parse(eDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        Customers customer = new Customers(billid,firstname,lastname,co,ad,em,tel,phone);
        Ballroombill ballroombill = new Ballroombill(billid,date,enddate,job,amount);
        this.customersRepository.save(customer);
        this.ballroombillRepository.save(ballroombill);

        return sDate;
    }
}
