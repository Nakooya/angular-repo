import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string = ''
  password:string = ''
  loginFailed:boolean = false;

  constructor(private authService: AuthService){}

  onLogin(): void{
    if(!this.authService.login(this.username, this.password)){
      this.loginFailed = true;
    }
  }
}
