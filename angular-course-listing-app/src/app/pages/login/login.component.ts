import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Hardcoded credentials
  private validUsername: string = 'admin';
  private validPassword: string = 'password123';

  constructor(private router: Router) { }

  onLogin() {
    if (
      this.username === this.validUsername &&
      this.password === this.validPassword
    ) {
      // Set login status in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/admin']); // Redirect to admin page
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}