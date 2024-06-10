
package com.example.Pregnancytracker.Controller;

import com.example.Pregnancytracker.Entity.Pregnancy;
import com.example.Pregnancytracker.Service.PregnancyServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")  //for frontend connection
@RequestMapping("api/v1/pregnancy")
public class PregnancyController {


    @Autowired
    private PregnancyServices pregnancyServices;

    @PostMapping(value="/save")
    private String saveStudent(@RequestBody Pregnancy pregnancies){
        pregnancyServices.saveorupdate(pregnancies);
        return pregnancies.get_id();
    }


    @GetMapping(value="/getAll")
    private Iterable<Pregnancy>getStudents()
    {

        return pregnancyServices.listAll();
    }

    @PutMapping (value="/edit/{id}")
    private  Pregnancy update(@RequestBody Pregnancy pregnancy,@PathVariable(name="id")String _id)
    {
        pregnancy.set_id(_id);
        pregnancyServices.saveorupdate(pregnancy);
        return pregnancy;
    }

    @DeleteMapping("/delete/{id}")
    private  void deletePregnancy(@PathVariable("id")String id)
    {
        pregnancyServices.deletePregnancy(id);
    }

    @RequestMapping("/pregnancy/{id}")
    private Pregnancy getPregnancy(@PathVariable(name="id")String pregnancyid)
    {
        return pregnancyServices.getPregnancyByID(pregnancyid);
    }
}
