package ru.bzzdwn.mobile_client;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import ru.bzzdwn.mobile_client.components.CurrentUser;
import ru.bzzdwn.mobile_client.components.LoginRequest;
import ru.bzzdwn.mobile_client.components.RegisterRequest;
import ru.bzzdwn.mobile_client.components.RetrofitAPI;
import ru.bzzdwn.mobile_client.components.UserInfo;
import ru.bzzdwn.mobile_client.components.UserRequest;

public class MainActivity extends AppCompatActivity {
    final String baseUrl = "http://10.160.15.253:8000/api/";

    private EditText editUsername, editPassword;
    private Button buttonLog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        editPassword = findViewById(R.id.editPassword);
        editUsername = findViewById(R.id.editUsername);
        buttonLog = findViewById(R.id.buttonLog);

        Intent intent = new Intent(this, HomePageActivity.class);

        buttonLog.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (editUsername.getText().toString().isEmpty() ||
                        editPassword.getText().toString().isEmpty()) {
                    Toast.makeText(MainActivity.this, "Please fill all the fields", Toast.LENGTH_SHORT).show();
                    return;
                }
                postLogin(  editUsername.getText().toString(),
                            editPassword.getText().toString(), intent);

            }
        });
    }

    private void postLogin(String username, String password, Intent intent){
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://10.160.15.253:8000/api/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        RetrofitAPI retrofitAPI = retrofit.create(RetrofitAPI.class);
        LoginRequest loginRequest = new LoginRequest(username, password);
        Call<LoginRequest> call = retrofitAPI.createPost(loginRequest);
        call.enqueue(new Callback<LoginRequest>() {
            @Override
            public void onResponse(Call<LoginRequest> call, Response<LoginRequest> response) {
                Toast.makeText(MainActivity.this, "Successfully!", Toast.LENGTH_SHORT).show();
                LoginRequest responseFromAPI = response.body();
                //UserInfo.token = response.body().getAuth_token();
                startActivity(intent);
            }

            @Override
            public void onFailure(Call<LoginRequest> call, Throwable t) {
                Toast.makeText(MainActivity.this, t.getMessage(), Toast.LENGTH_SHORT).show();

            }
        });

        /*Call<CurrentUser> currentUserCall = retrofitAPI.getCurrent(UserInfo.token);
        currentUserCall.enqueue(new Callback<CurrentUser>() {
            @Override
            public void onResponse(Call<CurrentUser> call, Response<CurrentUser> response) {
                CurrentUser responseFromAPI2 = response.body();
                UserInfo.id = responseFromAPI2.getId();
                Toast.makeText(MainActivity.this, UserInfo.id, Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onFailure(Call<CurrentUser> call, Throwable t) {
                Toast.makeText(MainActivity.this, t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });*/
    }

    public void startRegisterActivity(View v){
        Intent intent = new Intent(this, RegisterActivity.class);
        startActivity(intent);
    }

}