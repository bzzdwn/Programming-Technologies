package ru.bzzdwn.mobile_client.components;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class CoachList {
    @SerializedName("id")
        public int id;
    @SerializedName("name")
        public String name;
    @SerializedName("address")
        public String address;
    @SerializedName("position")
        public String position;
    @SerializedName("specialization")
        public String specialization;
    @SerializedName("phone")
        public String phone;
    @SerializedName("passport")
        public String passport;

        public String getName() {
            return name;
        }

        public String getAddress() {
            return address;
        }

        public int getId() {
            return id;
        }

        public String getPhone() {
            return phone;
        }

        public String getPosition() {
            return position;
        }

        public String getSpecialization() {
            return specialization;
        }

        public String getPassport() {
            return passport;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public void setId(int id) {
            this.id = id;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setPosition(String position) {
            this.position = position;
        }

        public void setSpecialization(String specialization) {
            this.specialization = specialization;
        }

        public void setPassport(String passport) {
            this.passport = passport;
        }

}
