import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    const isloggedin = localStorage.getItem('isloggedIn');
    const loggedUser = localStorage.getItem('loggedUser');

    if (isloggedin != 'true' || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }

  onLogout() {
    this.authService.logout();
  }
}