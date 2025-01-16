import { Component } from '@angular/core';
import { from, interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-creation',
  standalone: false,
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.css',
})
export class CreationComponent {
  results: string[] = [];

  useOf() {
    this.results = [];
    of([1, 2, 3, 4, 5, 6]).subscribe((val) => {
      this.results.push(`of() : ${val}`);
    });
  }

  useFrom() {
    this.results = [];
    from([1, 2, 3, 4, 5, 6]).subscribe((val) => {
      this.results.push(`from(): ${val}`);
    });
  }

  useInterval() {
    this.results = [];
    const subscription = interval(1000).subscribe((val) => {
      this.results.push(`interval() : ${val}`);
      if (val >= 5) {
        subscription.unsubscribe();
      }
    });
  }

  useTimer() {
    this.results = [];
    timer(2000).subscribe(() => {
      this.results.push(`Emission after 2 seconds`);
    });
  }
}
