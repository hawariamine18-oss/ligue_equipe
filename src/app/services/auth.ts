import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'amine', password: '123', roles: ['USER'] },
  ];

  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];

  constructor(private router: Router) {
    const login = localStorage.getItem('loggedUser');
    if (localStorage.getItem('isloggedIn') === 'true' && login) {
      this.setLoggedUserFromLocalStorage(login);
    }
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): boolean {
    let validUser = false;
    this.users.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): boolean {
    if (!this.roles) return false;
    return this.roles.indexOf('ADMIN') > -1;
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }
}