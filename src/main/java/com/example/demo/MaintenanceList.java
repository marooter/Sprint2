package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;
import lombok.Data;

@Data
@Entity
public class MaintenanceList {

	@ManyToOne
    private MaintenanceDivision owner;
	@ManyToOne
    private Room room;


	private @Id @GeneratedValue Long ListID;
	private String name;
	private String roomName;
    private Date Date;


    public MaintenanceList(){}
    public MaintenanceList(MaintenanceDivision owner,Room room,Date date){
		this.name=owner.getName();
		this.roomName=room.getType();
        this.Date=date;
		this.owner=owner;
		this.room=room;
    }
}
