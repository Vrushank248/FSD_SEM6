import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-register',
  standalone: true, // ✅ Ensure standalone is enabled
  imports: [FormsModule], // ✅ Use FormsModule instead of NgModel
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  audience = {
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: ''
  };

  registerAudience() {
    console.log('Audience Registered:', this.audience);
  }
}
