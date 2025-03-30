import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[FormsModule,CommonModule]
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      const success = this.authService.login(this.user.email, this.user.password);
      if (!success) {
        this.errorMessage = "Invalid credentials. Try again.";
      }
    }
  }
}
