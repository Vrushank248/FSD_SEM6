package com.Audience.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Audience")
public class Audience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "audience_id")
    private Long audience_id;

    @Column(name = "full_name")
    private String full_name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "affilation")
    private String affilation;

    @Column(name = "phone_no")
    private String phone_no;

    @Column(name = "conference_id")
    private Long conference_id;

    public Long getAudience_id() {
        return audience_id;
    }

    public void setAudience_id(Long audience_id) {
        this.audience_id = audience_id;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getAffilation() {
        return affilation;
    }

    public void setAffilation(String affilation) {
        this.affilation = affilation;
    }

    public String getPhone_no() {
        return phone_no;
    }

    public void setPhone_no(String phone_no) {
        this.phone_no = phone_no;
    }

    public Long getConference_id() {
        return conference_id;
    }

    public void setConference_id(Long conference_id) {
        this.conference_id = conference_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
