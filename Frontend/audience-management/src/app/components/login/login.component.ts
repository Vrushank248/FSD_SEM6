import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // ✅ Mark as standalone
  imports: [FormsModule, ReactiveFormsModule, CommonModule], // ✅ Import required modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log(response)
          localStorage.setItem('token', response.token);
          alert('Login successful!');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.errorMessage = 'Invalid credentials, please try again.';
          console.error('Login error:', err);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }
}
