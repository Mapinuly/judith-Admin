import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent {
  loginForm: FormGroup;
  Email: string = '';
  Password: string = '';
  emailTouched = false;
  passwordTouched = false;

  constructor(private frmbulider: FormBuilder, private route: Router, private snackBar: MatSnackBar, private authService: AuthService) {
    this.loginForm = frmbulider.group({
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: ['', Validators.required]
    })
  }
  ngOnInit() { }

  onSubmit(loginForm: any) {
    this.authService.login(loginForm.value.email, loginForm.value.password).subscribe(
      (response: any) => {
        if (response.access_token) {
          const authToken = response.accessToken
          this.showSuccessSnackbar();
          this.route.navigate(['/home'])
        }
      },
     
    )
    this.Email = loginForm.controls.email.value;
    this.Password = loginForm.controls.password.value;
    
  }
  onEmailBlur() {
    this.emailTouched = true;
  }

  onPasswordBlur() {
    this.passwordTouched = true;
  }
  showSuccessSnackbar() {
    this.snackBar.open('Login successful!', 'Close', {
      duration: 3000, // Display for 3 seconds
    });
  }



}
