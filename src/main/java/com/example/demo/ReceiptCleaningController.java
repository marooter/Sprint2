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

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Controller
public class ReceiptCleaningController {

    @Autowired
    ReceiptCleaningRepository receiptCleaningRepository;

    @ResponseBody
    @RequestMapping(path = "/roomnumber/{roomnumber}/fname/{fname}/lname/{lname}/telnum/{telnum}/location/{location}/note/{note}/date/{date}/time/{time}", method = RequestMethod.GET)
    public String receiptCleanings(@PathVariable String roomnumber,@PathVariable String fname,@PathVariable String lname,@PathVariable String telnum,@PathVariable String location,@PathVariable String note,@PathVariable String date,@PathVariable String time) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date d = new Date();
        try {
            d = formatter.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        ReceiptCleaning receiptCleaning = new ReceiptCleaning(roomnumber,fname,lname,telnum,location,note,d,time);
        this.receiptCleaningRepository.save(receiptCleaning);
        return "{\"status\":\"save\"}";
        
    }

}