package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final BallroomRepository ballroomRepository;

    @Autowired
    public DatabaseLoader(BallroomRepository repository) {
        this.ballroomRepository = repository;
    }

	@Override
	public void run(String... strings) throws Exception {
		this.ballroomRepository.save(new Ballroom("Marooter Grand Ballroom I","400-500 คน"));
		this.ballroomRepository.save(new Ballroom("Marooter Grand Ballroom II","500 คน"));
		this.ballroomRepository.save(new Ballroom("Marooter Grand Ballroom III","200-250 คน"));

	}
}
