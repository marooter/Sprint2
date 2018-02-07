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
public class OrderController {

    
    @Autowired
    BillOderRepository billOderRepository;

    @ResponseBody
    @RequestMapping(path = "/billid/{bid}/name/{n}/roomnumber/{rn}/food/{f}/drink/{d}/date/{date}",method = RequestMethod.GET)
    public String billOrder(@PathVariable String bid,
                            @PathVariable String n,
                            @PathVariable String rn,
                            @PathVariable String f,
                            @PathVariable String d,
                            @PathVariable String date

                             ){

        
        BillOrder order = new BillOrder(bid,n,rn,f,d,date);
        this.billOderRepository.save(order);
        return "{\"status\":\"Order\"}";
    }
}

