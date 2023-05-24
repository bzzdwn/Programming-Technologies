package ru.bzzdwn.mobile_client.ui.cards;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;

import ru.bzzdwn.mobile_client.databinding.FragmentCardsBinding;
import ru.bzzdwn.mobile_client.databinding.FragmentHomeBinding;
import ru.bzzdwn.mobile_client.ui.home.HomeViewModel;


public class CardsFragment extends Fragment {
    private FragmentCardsBinding binding;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        binding = FragmentCardsBinding.inflate(inflater, container, false);
        View root = binding.getRoot();
        return root;
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}
