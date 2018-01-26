package com.example.demo;
import org.springframework.data.repository.query.Param;

import org.springframework.data.repository.CrudRepository;

public interface RoomnumberRepository extends CrudRepository<Roomnumber, Long> {

  Roomnumber findByRoomID(
          @Param("roomID") String roomID
  );
}
