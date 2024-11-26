import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

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
        label: 'Chart Data',
        data: [] as number[],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
      type: 'pie', // You can change this to 'line', 'pie', etc., for different chart types
      data: this.chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }
}
