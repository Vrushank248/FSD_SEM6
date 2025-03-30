import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  constructor(private router:Router, private authService : AuthService){}

  handleLogout(){
    this.authService.logout()
  }
  profile(){
    this.router.navigate(['dashboard/profile'])
  }
}
