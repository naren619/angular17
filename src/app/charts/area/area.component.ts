import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent {
  chart: any = []
  ngOnInit() {
    Chart.register(...registerables);
    this.chart = new Chart('myareachart', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    
  console.log("naren", this.chart)
  }

}
