package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
	private final RoomRepository roomrepository;
	private final RoomnumberRepository roomnumberRepository;
	private final BallroomRepository ballroomRepository;

    @Autowired
    public DatabaseLoader(RoomRepository roomrepository,RoomnumberRepository roomnumberRepository,BallroomRepository repository) {
		this.roomrepository = roomrepository;
		this.roomnumberRepository = roomnumberRepository;
    	this.ballroomRepository = repository;
    }

	@Override
	public void run(String... strings) throws Exception {
		this.ballroomRepository.save(new Ballroom("MarooterBallroomI","Marooter Grand Ballroom I","400-500 คน"));
		this.ballroomRepository.save(new Ballroom("MarooterBallroomII","Marooter Grand Ballroom II","500 คน"));
		this.ballroomRepository.save(new Ballroom("MarooterBallroomIII","Marooter Grand Ballroom III","200-250 คน"));

		this.roomrepository.save(new Room("Deluxe", 1300.00));
		this.roomrepository.save(new Room("Super Deluxe", 1600.00));
		this.roomrepository.save(new Room("Gremier Deluxe", 2000.00));
		this.roomrepository.save(new Room("Premier Grand Deluxe", 2350.00));

		this.roomnumberRepository.save(new Roomnumber("A01"));
		this.roomnumberRepository.save(new Roomnumber("A02"));
		this.roomnumberRepository.save(new Roomnumber("A03"));
		this.roomnumberRepository.save(new Roomnumber("A04"));
		this.roomnumberRepository.save(new Roomnumber("A05"));

		this.roomnumberRepository.save(new Roomnumber("S01"));
		this.roomnumberRepository.save(new Roomnumber("S02"));
		this.roomnumberRepository.save(new Roomnumber("S03"));
		this.roomnumberRepository.save(new Roomnumber("S04"));
		this.roomnumberRepository.save(new Roomnumber("S05"));

		this.roomnumberRepository.save(new Roomnumber("G01"));
		this.roomnumberRepository.save(new Roomnumber("G02"));
		this.roomnumberRepository.save(new Roomnumber("G03"));
		this.roomnumberRepository.save(new Roomnumber("G04"));
		this.roomnumberRepository.save(new Roomnumber("G05"));

		this.roomnumberRepository.save(new Roomnumber("P01"));
		this.roomnumberRepository.save(new Roomnumber("P02"));
		this.roomnumberRepository.save(new Roomnumber("P03"));
		this.roomnumberRepository.save(new Roomnumber("P04"));
		this.roomnumberRepository.save(new Roomnumber("P05"));

	}
}
