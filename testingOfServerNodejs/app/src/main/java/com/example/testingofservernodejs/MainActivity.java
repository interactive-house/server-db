package com.example.testingofservernodejs;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import android.widget.CompoundButton;
import android.widget.Switch;
import android.widget.TextView;

import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.RetryPolicy;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class MainActivity extends AppCompatActivity {
    TextView lamp_result ;
    Switch switch_light;
    Switch switch_door;
    TextView door_result ;
    DatabaseReference mDatabaseLamp;
    DatabaseReference mDatabaseDoor;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mDatabaseLamp = FirebaseDatabase.getInstance().getReference("SmartHomeValueLight").child("StatusOflight");
        mDatabaseDoor = FirebaseDatabase.getInstance().getReference("SmartHomeValueDoor").child("StatusOfDoor");
        setContentView(R.layout.activity_main);
        lamp_result = findViewById(R.id.light_result);
        switch_light = findViewById(R.id.switch_light);
        switch_door = findViewById(R.id.switch_door);
        door_result = findViewById(R.id.door_result);
        if (ContextCompat.checkSelfPermission(this, android.Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED){
            ActivityCompat.requestPermissions(this,new String[]{Manifest.permission.RECORD_AUDIO},1);
        }
        //Light write

        switch_light.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged (CompoundButton buttonView, boolean isChecked) {
                if (buttonView.isChecked()){
                    mDatabaseLamp.setValue("on");
                }else {
                    mDatabaseLamp.setValue("off");
                }
            }
        });

        // Door write

        switch_door.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (buttonView.isChecked()){
                    mDatabaseDoor.setValue("on");
                }else {
                    mDatabaseDoor.setValue("off");
                }
            }
        });

        // read light

        mDatabaseLamp.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                String valu = snapshot.getValue(String.class);
                Log.d("value Light",String.valueOf(valu));
                if (valu.equals("on")){
                    changeStateOfSwitchOn(switch_light);
                }else if (valu.equals("off")){
                    changeStateOfSwitchOff(switch_light);
                }
                lamp_result.setText(valu);
            }
            @Override
            public void onCancelled(@NonNull DatabaseError error) {

            }
        });

        // read door

        mDatabaseDoor.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                String valu = snapshot.getValue(String.class);
                Log.d("value Door",String.valueOf(valu));
                if (valu.equals("on")){
                    changeStateOfSwitchOn(switch_door);
                }else if (valu.equals("off")){
                    changeStateOfSwitchOff(switch_door);
                }
                door_result.setText(valu);
            }
            @Override
            public void onCancelled(@NonNull DatabaseError error) {

            }
        });

    }

    public void changeStateOfSwitchOn(Switch state){
        state.setChecked(true);
    }
    public void changeStateOfSwitchOff(Switch state){
        state.setChecked(false);
    }
}