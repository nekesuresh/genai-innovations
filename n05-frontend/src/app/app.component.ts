import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterModule]
})
export class AppComponent {
    title = 'n05-frontend';
    constructor(private router: Router) {}


    isLoggedIn(): boolean {
        return !!localStorage.getItem('token'); // Check if a token exists
    }

    logout() {
        localStorage.removeItem('token'); // Remove the token
        this.router.navigate(['/login']); // Redirect to Login
    }
}
