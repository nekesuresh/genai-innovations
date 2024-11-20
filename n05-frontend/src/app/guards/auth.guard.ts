import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token'); // Check for token
    if (!token) {
      // Show popup
      window.alert('Login to access this page. Redirecting to login page...');
      // Redirect to login
      this.router.navigate(['/login']);
      return false; // Block navigation
    }
    return true; // Allow navigation
  }
}
