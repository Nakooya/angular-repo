import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;

  constructor(private router: Router) { }

  login(username: string, password: string):boolean{
    if(username == 'username' && password == 'password')
    {
      this.isLoggedInStatus = true;
      localStorage.setItem('token', 'some-auth-token');
      this.router.navigate(['/dashboard'])
      return true;
    }
    else
    {
      return false;
    }
  }

  logout(): void{
    this.isLoggedInStatus = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn():boolean{
    return this.isLoggedInStatus || !!localStorage.getItem('token');
  }
}
