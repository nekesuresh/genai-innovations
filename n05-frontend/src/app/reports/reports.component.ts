import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

// reference : https://explodingtopics.com/blog/generative-ai-stats

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent implements OnInit {
  chartData = {
    labels: [] as string[],
    datasets: [
      {
        data: [] as number[],
        backgroundColor: [
          '#FF6384', // Light pink
          '#36A2EB', // Light blue
          '#FFCE56', // Yellow
          '#4BC0C0', // Teal
          '#9966FF', // Light purple
          '#FF9F40', // Orange
        ],
        borderColor: '#fff', // White borders between segments
        borderWidth: 1,
      },
    ],
  };

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    try {
      // Fetch data from the backend
      const response = await this.http
        .get<{ labels: string[]; data: number[] }>('http://localhost:3000/api/charts/reports')
        .toPromise();

      // Process the response and populate the chartData
      if (response) {
        this.chartData.labels = response.labels;
        this.chartData.datasets[0].data = response.data;
      }

      // Render the chart
      this.renderChart();
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  }

  renderChart() {
    const ctx = document.getElementById('ReportsChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'pie',
      data: this.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Percentage of overall generative AI Market Share', // Chart title
            font: {
              size: 18, // Adjust font size
              weight: 'bold', // Optional: Make the title bold
            },
            color: 'black', // Black text for the title
          },
          legend: {
            position: 'bottom', // Position the legend at the bottom
            labels: {
              color: 'black', // Black text for legend labels
              font: {
                size: 12,
              },
            },
          },
        },
      },
    });
  }
}
