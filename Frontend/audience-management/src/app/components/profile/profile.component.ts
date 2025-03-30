import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true, // ✅ Mark as standalone
  imports: [FormsModule, ReactiveFormsModule,CommonModule], // ✅ Import required modules
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] // ✅ Corrected `styleUrls`
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authService:AuthService) {
    this.profileForm = this.formBuilder.group({
      full_name: ['', [Validators.minLength(3)]],
      phone_no: ['', [Validators.pattern(/^\d{10}$/)]],
      affilation: ['', [Validators.minLength(3)]]
    });
  }

  profileSubmit() {
  const userIdString = localStorage.getItem("token");
  const userId = userIdString ? parseInt(userIdString, 10) : null;
  if (userId === null || isNaN(userId)) {
    alert("Invalid user ID. Please log in again.");
    return;
  }
  if (this.profileForm.valid) {
    this.authService.updateProfile(userId, this.profileForm.value).subscribe({
      next: (response) => {
          console.log('Profile updated:', response);
          alert('Profile updated successfully');
        },
        error: (error) => {
          console.error("Update failed:", error);
          alert("Failed to update profile. Try again.");
        }
      });
    } else {
      alert("Please fill all fields correctly.");
    }
  }
}
