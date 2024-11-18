import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = ''; // Two-way bound to the input field
  password: string = ''; // Two-way bound to the input field
  errorMessage: string = ''; // Used to display login errors

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginData = { username: this.username, password: this.password };

    this.http.post<{ token: string }>('http://localhost:3000/api/auth/login', loginData)
      .subscribe({
        next: (response) => {
          // Save JWT token in local storage
          localStorage.setItem('token', response.token);
          // Navigate to the dashboard
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.errorMessage = 'Invalid username or password';
        },
      });
  }
}
