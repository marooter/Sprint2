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

@Controller
public class ReservationReceiptController {

    @Autowired
    ReservationReceiptRepository reservationReceiptRepository;
    @Autowired
    CustomersRepository customersRepository;
    @Autowired
    RoomnumberRepository roomnumberRepository;
    @Autowired
    RoomRepository roomRepository;

    @ResponseBody
    @RequestMapping(path = "/billid/{billid}/name/{name}/nameroom/{nameroom}/roomnumber/{roomnumber}/date/{date}/price/{price}/email/{email}/tel/{tel}", method = RequestMethod.POST)
    public String ReservationReceipt(@PathVariable String billid,
                                     @PathVariable String name,
                                     @PathVariable String nameroom,
                                     @PathVariable String roomnumber,
                                     @PathVariable String date,
                                     @PathVariable Double price,
                                     @PathVariable String email,
                                     @PathVariable String tel) {

        Roomnumber roomnum = this.roomnumberRepository.findByroomnumber(roomnumber);
        Room room = this.roomRepository.findBynameroom(nameroom);
        Customers customer = new Customers(name,"",email,tel);
        this.customersRepository.save(customer);
        ReservationReceipt reservationReceipt = new ReservationReceipt(billid,name,room,roomnum,date,price);
        this.reservationReceiptRepository.save(reservationReceipt);
        return "{\"status\":\"ReservationReceipt\"}";
    }
}