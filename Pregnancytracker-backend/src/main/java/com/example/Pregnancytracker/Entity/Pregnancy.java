package com.example.Pregnancytracker.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "pregnancy")
public class Pregnancy {
    @Id
    private String _id;
    private String  name;
    private String email;
    private String password;
    private String confirmPassword;

    private String lastPeriod;

    private String fetusAgeWeeks;

    private  String fetusAgeDays;

    private String pregnancyConfirmed;

    private  String sname;
    private String semail;

    public Pregnancy(String _id, String name, String email, String password, String confirmPassword,String lastPeriod,String fetusAgeWeeks,String fetusAgeDays
    ,String pregnancyConfirmed,String sname,String semail) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.lastPeriod=lastPeriod;
        this.fetusAgeWeeks=fetusAgeWeeks;
        this.fetusAgeDays=fetusAgeDays;
        this.pregnancyConfirmed=pregnancyConfirmed;
        this.sname=sname;
        this.semail=semail;
    }

    public Pregnancy() {
    }


    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String lastPeriod) {

        this.confirmPassword = confirmPassword;
    }

    public String getLastPeriod() {
        return lastPeriod;
    }

    public void setLastPeriod(String lastPeriod) {
        this.lastPeriod = lastPeriod;
    }

    public String getFetusAgeWeeks() {
        return fetusAgeWeeks;
    }

    public void setFetusAgeWeeks(String fetusAgeWeeks) {
        this.fetusAgeWeeks = fetusAgeWeeks;
    }

    public String getFetusAgeDays() {
        return fetusAgeDays;
    }

    public void setFetusAgeDays(String fetusAgeDays) {
        this.fetusAgeDays = fetusAgeDays;
    }

    public String getPregnancyConfirmed() {
        return pregnancyConfirmed;
    }

    public void setPregnancyConfirmed(String pregnancyConfirmed) {
        this.pregnancyConfirmed = pregnancyConfirmed;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getSemail() {
        return semail;
    }

    public void setSemail(String semail) {
        this.semail = semail;
    }

    @Override
    public String toString() {
        return "Pregnancy{" +
                "_id='" + _id + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", confirmPassword='" + confirmPassword + '\'' +
                ", lastPeriod='" + lastPeriod + '\'' +
                ", fetusAgeWeeks='" + fetusAgeWeeks + '\'' +
                ", fetusAgeDays='" + fetusAgeDays + '\'' +
                ", pregnancyConfirmed='" + pregnancyConfirmed + '\'' +
                ", sname='" + sname + '\'' +
                ", semail='" + semail + '\'' +
                '}';
    }
}
