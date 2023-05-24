package ru.bzzdwn.mobile_client.components;

import com.google.gson.annotations.SerializedName;

public class LoginRequest {
    @SerializedName("username")
    private String username;
    @SerializedName("password")
    private String password;

    @SerializedName("auth_token")
    private String auth_token;

    public LoginRequest(String username, String password){
        this.username = username;
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public String getAuth_token() {
        return auth_token;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setAuth_token(String auth_token) {
        this.auth_token = auth_token;
    }
}
