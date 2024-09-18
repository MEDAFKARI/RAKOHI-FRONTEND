import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent implements OnInit {

  RegisterForm!: FormGroup


  constructor(private router:Router,private fb:FormBuilder,private authService:AuthService) { 
  }

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      username: [''],
      password: [''],
    })
  }

  Register(){
    if(this.RegisterForm.valid){
      console.log(this.RegisterForm.value);
      this.authService.Register(this.RegisterForm.value).subscribe
      (
        data => {
          console.log(data);
          this.router.navigateByUrl('login');
        },
        error => {
          console.log(error);
        }
      )
    }
  }

}
