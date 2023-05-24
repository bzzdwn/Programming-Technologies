package ru.bzzdwn.mobile_client;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import ru.bzzdwn.mobile_client.components.LoginRequest;
import ru.bzzdwn.mobile_client.components.RegisterRequest;
import ru.bzzdwn.mobile_client.components.RetrofitAPI;
import ru.bzzdwn.mobile_client.components.UserRequest;

public class RegisterActivity extends AppCompatActivity {

    private EditText editFIO, editAddress, editLogin, editEmail, editPassword, editPhone;
    private Button buttonReg;
    private ProgressBar loading;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        editFIO = findViewById(R.id.editFIO);
        editAddress = findViewById(R.id.editAddress);
        editLogin = findViewById(R.id.editLogin);
        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);
        editPhone = findViewById(R.id.editPhone);
        buttonReg = findViewById(R.id.buttonReg);
        loading = findViewById(R.id.loading);

        loading.setVisibility(View.INVISIBLE);

        Intent intent = new Intent(this, HomePageActivity.class);
        buttonReg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (editFIO.getText().toString().isEmpty() ||
                        editAddress.getText().toString().isEmpty() ||
                        editLogin.getText().toString().isEmpty() ||
                        editEmail.getText().toString().isEmpty() ||
                        editPassword.getText().toString().isEmpty() ||
                        editPhone.getText().toString().isEmpty()) {
                    Toast.makeText(RegisterActivity.this, "Please fill all the fields", Toast.LENGTH_SHORT).show();
                    return;
                }
                postRegister(   editLogin.getText().toString(),
                                editEmail.getText().toString(),
                                editPassword.getText().toString());
                postCreateUser( editFIO.getText().toString(),
                                editAddress.getText().toString(),
                                editPhone.getText().toString(),
                                editEmail.getText().toString());
                postLogin (
                        editLogin.getText().toString(),
                        editPassword.getText().toString(),
                        intent
                );
            }
        });
    }

    private void postRegister(String username, String email, String password){
        loading.setVisibility(View.VISIBLE);
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.100.7:8000/api/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        RetrofitAPI retrofitAPI = retrofit.create(RetrofitAPI.class);
        RegisterRequest registerRequest = new RegisterRequest(username, email, password);
        Call<RegisterRequest> call = retrofitAPI.createPost(registerRequest);
        call.enqueue(new Callback<RegisterRequest>() {
            @Override
            public void onResponse(Call<RegisterRequest> call, Response<RegisterRequest> response) {
                Toast.makeText(RegisterActivity.this, "Successfully!", Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onFailure(Call<RegisterRequest> call, Throwable t) {
                Toast.makeText(RegisterActivity.this, t.getMessage(), Toast.LENGTH_SHORT).show();

            }
        });
    }

    private void postCreateUser(String name, String address, String phone, String email){
        loading.setVisibility(View.VISIBLE);
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.100.7:8000/api/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        RetrofitAPI retrofitAPI = retrofit.create(RetrofitAPI.class);
        UserRequest userRequest = new UserRequest(name, address, phone, email);
        Call<UserRequest> call = retrofitAPI.createPost(userRequest);
        call.enqueue(new Callback<UserRequest>() {
            @Override
            public void onResponse(Call<UserRequest> call, Response<UserRequest> response) {
                Toast.makeText(RegisterActivity.this, "Successfully!", Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onFailure(Call<UserRequest> call, Throwable t) {
                Toast.makeText(RegisterActivity.this, t.getMessage(), Toast.LENGTH_SHORT).show();

            }
        });
    }

    private void postLogin(String username, String password, Intent intent){
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.100.7:8000/api/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        RetrofitAPI retrofitAPI = retrofit.create(RetrofitAPI.class);
        LoginRequest loginRequest = new LoginRequest(username, password);
        Call<LoginRequest> call = retrofitAPI.createPost(loginRequest);
        call.enqueue(new Callback<LoginRequest>() {
            @Override
            public void onResponse(Call<LoginRequest> call, Response<LoginRequest> response) {
                Toast.makeText(RegisterActivity.this, "Successfully!", Toast.LENGTH_SHORT).show();
                startActivity(intent);
            }

            @Override
            public void onFailure(Call<LoginRequest> call, Throwable t) {
                Toast.makeText(RegisterActivity.this, t.getMessage(), Toast.LENGTH_SHORT).show();

            }
        });
    }

    public void startLoginActivity(View v){
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
    }

}
