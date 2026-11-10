import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class Login {
  user = new User();
  erreur = 0;

  constructor(private authService: AuthService, private router: Router) {}

  onLoggedin() {
    const isValidUser = this.authService.SignIn(this.user);
    if (isValidUser) this.router.navigate(['/']);
    else this.erreur = 1;
  }
}