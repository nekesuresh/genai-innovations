import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  topicSummary: string = '';
  referenceUrl: string = '';
  techDetails: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    // Set topic summary and reference URL
    this.topicSummary = `Generative AI has seen remarkable advancements over the past six months,
    particularly in text-to-image generation, AI art creation, and natural language processing (NLP).
    Innovations such as OpenAI's GPT-4 and Google's Gemini have transformed the way machines interact
    with humans. AI models are now capable of generating highly realistic images from simple text prompts,
    allowing industries like advertising, gaming, and film production to leverage these tools for creative purposes.
    Additionally, new tools like DALL-E 3 and MidJourney have gained traction in revolutionizing design workflows
    and democratizing AI capabilities for creators globally.`;

    this.referenceUrl = 'https://www.example.com/recent-generative-ai-news';

    // Set project technical details
    this.techDetails = `This project is built using Angular for the frontend, Node.js for the backend, and MySQL
    as the database. The application is a single-page application (SPA) that uses JWT-based authentication.
    The frontend communicates with the backend via RESTful APIs. NGINX serves the frontend, while the backend runs
    on port 3000 to handle API requests securely. Chart.js is used for visualizing data dynamically, making the
    interface user-friendly and informative.`;
  }
}
