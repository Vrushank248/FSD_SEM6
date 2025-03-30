import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUser = { email: "user@example.com", password: "password123" };

  login(email: string, password: string): boolean {
    if (email === this.mockUser.email && password === this.mockUser.password) {
      console.log("Login successful!");
      return true;
    }
    console.log("Login failed!");
    return false;
  }
}
