package com.example.Pregnancytracker.Repo;

import com.example.Pregnancytracker.Entity.Pregnancy;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface PregnancyRepo extends MongoRepository<Pregnancy,String> {
    Optional<Pregnancy> findByEmail(String email);
}
