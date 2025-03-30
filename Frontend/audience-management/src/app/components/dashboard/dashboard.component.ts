import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Audience } from '../../models/audience';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  audience: Audience | null = null;

  constructor(private router: Router) {
    const storedAudience = localStorage.getItem('audience');
    if (storedAudience) {
      this.audience = JSON.parse(storedAudience);
    }
  }

  logout() {
    localStorage.removeItem('audience');
    this.router.navigate(['/']);
  }
}
