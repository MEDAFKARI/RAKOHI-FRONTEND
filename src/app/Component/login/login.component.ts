import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../../Services/message-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router:Router,private fb:FormBuilder,private authService:AuthService){}


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:[''],
      password:['']
    })
    
  }


  Login(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value);
        this.authService.Login(this.loginForm.value).subscribe
        (
          data => {
            console.log(data);
            this.router.navigate(['/home']);
            this.authService.saveToken(data.token);
          },
          error => {
            console.log(error);
          }
        )
    }
  }

}
