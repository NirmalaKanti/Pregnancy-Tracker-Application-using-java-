package com.example.Pregnancytracker.Service;

import com.example.Pregnancytracker.Entity.Pregnancy;
import com.example.Pregnancytracker.Repo.PregnancyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class PregnancyServices {

    @Autowired

    private PregnancyRepo repo;

    public void saveorupdate(Pregnancy pregnancies) {

        String email = pregnancies.getEmail();
        // Check if a document with the provided email exists
        Optional<Pregnancy> existingPregnancy = repo.findByEmail(email);

        if (existingPregnancy.isPresent()) {
            // If a document with the email exists, update it
            Pregnancy existingEntity = existingPregnancy.get();

            existingEntity.setLastPeriod(pregnancies.getLastPeriod());
            existingEntity.setFetusAgeWeeks(pregnancies.getFetusAgeWeeks());
            existingEntity.setFetusAgeDays(pregnancies.getFetusAgeDays());
            existingEntity.setPregnancyConfirmed(pregnancies.getPregnancyConfirmed());
          existingEntity.setSname(pregnancies.getSname());
            existingEntity.setSemail(pregnancies.getSemail());


            // Save the updated entity
            repo.save(existingEntity);
        } else {
            // If a document with the email does not exist, create a new document
            repo.save(pregnancies);
        }
    }

    public void updatedata(Pregnancy pregnacies ){
    repo.save(pregnacies);
    }

    public Iterable<Pregnancy> listAll() {
        return this.repo.findAll();
    }

    public void deletePregnancy(String id) {
        repo.deleteById(id);
    }

    public Pregnancy getPregnancyByID(String pregnancyid) {
        return repo.findById(pregnancyid).get();
    }
}
