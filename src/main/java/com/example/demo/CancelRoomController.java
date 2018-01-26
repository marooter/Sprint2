package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
public class CancelRoomController {

     @Autowired
     CancelRoomRepository cancelRoomRepository;

     @Autowired
     ReservationReceiptRepository  reservationReceiptRepository;

     @ResponseBody
     @RequestMapping(path = "/name/{name}/billid/{billid}", method = RequestMethod.GET)
     public String CancelRoom(@PathVariable String name , @PathVariable String billid ) {
         ReservationReceipt Billid = this.reservationReceiptRepository.findByBillid(billid);
         ReservationReceipt Name = this.reservationReceiptRepository.findByName(name);
        System.out.println(Billid +"  "+Name);//ปริ้นค่าออกมาดูว่าจะรีอะไร
        if(Billid!=null&&Name!=null)//รีเทิร์นเป็นออปเจคมั้ย ถ้าไม่มันจะเป็นnull
            return "{\"status\":\"found\"}";
        else
            return "{\"status\":\"not found\"}";
     }


     @ResponseBody
     @RequestMapping(path = "/billid/{billid}", method = RequestMethod.GET)
     public ReservationReceipt CancelRoom(@PathVariable String billid ) {
            ReservationReceipt billId = this.reservationReceiptRepository.findByBillid(billid);
            return billId;
     }
     
     @ResponseBody
     @RequestMapping(path = "/cancelbill/{cancelbill}/billid/{billid}/name/{name}/nameroom/{nameroom}/roomnumber/{roomnumber}/date/{date}/price/{price}", method = RequestMethod.GET)
     public String CancelRoom1(  @PathVariable String cancelbill,
                                            @PathVariable String billid,
                                            @PathVariable String name,
                                            @PathVariable String nameroom, 
                                            @PathVariable String roomnumber,
                                            @PathVariable String date ,
                                            @PathVariable Double price) {
           CancelRoom  cancelRoom = new CancelRoom(cancelbill,billid,name,nameroom,roomnumber,date,price);
           System.out.println(cancelbill+""+billid+""+name+""+nameroom+""+roomnumber+""+date+""+price);
           this.cancelRoomRepository.save(cancelRoom);
           return  "{\"status\":\"Saved\"}";
     }


}