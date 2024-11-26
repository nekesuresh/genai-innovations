import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

// reference : https://explodingtopics.com/blog/generative-ai-stats

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  chartData = {
    labels: [] as string[],
    datasets: [
      {
        data: [] as number[],
        backgroundColor: 'blue', // Solid blue color
        borderColor: 'blue', // Solid blue border
        borderWidth: 1,
      },
    ],
  };

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    try {
      // Fetch data from the backend
      const response = await this.http
        .get<{ labels: string[]; data: number[] }>('http://localhost:3000/api/charts/summary')
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
    const ctx = document.getElementById('summaryChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: this.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
          title: {
            display: true,
            text: 'Industries with the Highest Potential for Automation', // Chart title
            font: {
              size: 18, // Adjust font size
              weight: 'bold', // Optional: Make the title bold
            },
            color: 'black', // Black text for the title
          },
          legend: {
            display: false, // Remove the label for the color
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Industry', // X-axis title
              font: {
                size: 14,
                weight: 'bold',
              },
              color: 'black', // Black text for X-axis title
            },
            ticks: {
              color: 'black', // Black text for X-axis ticks
            },
          },
          y: {
            title: {
              display: true,
              text: 'Percentage of Jobs', // Y-axis title
              font: {
                size: 14,
                weight: 'bold',
              },
              color: 'black', // Black text for Y-axis title
            },
            ticks: {
              color: 'black', // Black text for Y-axis ticks
            },
          },
        },
      },
    });
  }
}
