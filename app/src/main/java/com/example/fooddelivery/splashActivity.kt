package com.example.fooddelivery

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class splashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val intent=Intent(this,LoginActivity::class.java)
        startActivity(intent)
        finish()

    }
}