package com.example.fooddelivery

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.google.android.material.textfield.TextInputEditText
import com.google.android.material.textfield.TextInputLayout

class LoginActivity : AppCompatActivity() {
    lateinit var tilUsername:TextInputLayout
    lateinit var tilPassword:TextInputLayout
    lateinit var etUsername:TextInputEditText
    lateinit var etPassword:TextInputEditText
    lateinit var btnlogin:Button
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        castViews()


    }
    fun castViews(){
        tilUsername=findViewById(R.id.tilUsername)
        tilPassword=findViewById(R.id.tilPassword)
        etPassword=findViewById(R.id.etPassword)
        etUsername=findViewById(R.id.etUsername)
        btnlogin=findViewById(R.id.btnlogin)
        btnlogin.setOnClickListener { validate() }
    }
    fun validate() {
        var error=false
        tilUsername.error=null
        tilPassword.error=null


        var username = etUsername.text.toString()
        if (username.isBlank()) {
            tilUsername.error = "username is required"



        }
        var password = etPassword.text.toString()
        if (password.isBlank()) {
           tilPassword.error="password is a must"

        }

    }

}