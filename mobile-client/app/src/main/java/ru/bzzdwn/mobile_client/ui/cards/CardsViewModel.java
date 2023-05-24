package ru.bzzdwn.mobile_client.ui.cards;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

public class CardsViewModel extends ViewModel {
    private final MutableLiveData<String> mText;

    public CardsViewModel() {
        mText = new MutableLiveData<>();
        mText.setValue("This is gallery fragment");
    }

    public LiveData<String> getText() {
        return mText;
    }
}
