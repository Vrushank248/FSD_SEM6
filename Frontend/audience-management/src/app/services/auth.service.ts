import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/audience';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const data = {email:email,password:password}
    return this.http.post(`${this.apiUrl}/login?email=${email}&password=${password}`, {});
  }

  register(userData: any): Observable<any> {
    console.log(userData)
    const data = {
      full_name:userData?.full_name,
      email:userData?.email,
      password:userData?.password,
      affilation:userData?.affilation,
      phone_no:userData?.phone_no,
      conference_id:2
    }
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  updateProfile(userId: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-profile/${userId}`, updatedData);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
