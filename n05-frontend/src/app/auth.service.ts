import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  // Set the user as logged in
  login(): void {
    this.isAuthenticated = true;
  }

  // Set the user as logged out
  logout(): void {
    this.isAuthenticated = false;
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
