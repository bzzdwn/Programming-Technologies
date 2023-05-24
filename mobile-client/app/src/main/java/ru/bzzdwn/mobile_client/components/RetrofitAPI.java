package ru.bzzdwn.mobile_client.components;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;

public interface RetrofitAPI {
    @POST("sportcenterapp/create/visitor/")
    Call<UserRequest> createPost(@Body UserRequest userRequest);

    @POST("auth/users")
    Call<RegisterRequest> createPost(@Body RegisterRequest registerRequest);

    @POST("auth_token/token/login/")
    Call<LoginRequest> createPost(@Body LoginRequest loginRequest);

    @GET("sportcenterapp/show/coach/")
    Call<List<CoachList>> getData();

    @GET("auth/users/me/")
    Call<CurrentUser> getCurrent(@Header("Token") String token);
}
