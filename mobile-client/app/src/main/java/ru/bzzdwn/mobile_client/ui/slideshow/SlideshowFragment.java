package ru.bzzdwn.mobile_client.ui.slideshow;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import ru.bzzdwn.mobile_client.MainActivity;
import ru.bzzdwn.mobile_client.R;
import ru.bzzdwn.mobile_client.components.CoachList;
import ru.bzzdwn.mobile_client.components.LoginRequest;
import ru.bzzdwn.mobile_client.components.RetrofitAPI;
import ru.bzzdwn.mobile_client.databinding.FragmentSlideshowBinding;

public class SlideshowFragment extends Fragment {
    final String baseUrl = "http://10.160.15.253:8000/api/";
    private FragmentSlideshowBinding binding;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        SlideshowViewModel slideshowViewModel =
                new ViewModelProvider(this).get(SlideshowViewModel.class);

        binding = FragmentSlideshowBinding.inflate(inflater, container, false);
        View root = binding.getRoot();
        View contentView = inflater.inflate(R.layout.fragment_slideshow, container, false);
        ListView listView = contentView.findViewById(R.id.listView);
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(baseUrl)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        RetrofitAPI retrofitAPI = retrofit.create(RetrofitAPI.class);
        Call<List<CoachList>> call = retrofitAPI.getData();
        call.enqueue(new Callback<List<CoachList>>() {
            @Override
            public void onResponse(Call<List<CoachList>> call, Response<List<CoachList>> response) {
                List< CoachList> data = response.body();
                String[] coaches = new String[data.size()];
                for (int i = 0; i < data.size(); i++) {
                    coaches[i] = "\nФИО: " + data.get(i).getName() + "\n\nДолжность: " + data.get(i).getPosition()
                            + "\n\nТелефон: " + data.get(i).getPhone() + "\n";
                }
                listView.setAdapter( new ArrayAdapter<String >(inflater.getContext(), android.R.layout.simple_list_item_1, coaches));
            }

            @Override
            public void onFailure(Call<List<CoachList>> call, Throwable t) {
                Toast.makeText(inflater.getContext(), t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
        return contentView;
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}