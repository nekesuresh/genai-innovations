import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = false; // Change this based on real authentication check logic
    if (!isLoggedIn) {
      // Redirect to login with queryParams for popup
      this.router.navigate(['/login'], {
        queryParams: { redirect: true },
      });
      return false;
    }
    return true;
  }
}
