import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { filter, take, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filtering',
  standalone: false,
  
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.css'
})
export class FilteringComponent implements OnInit{
  results: string[] = [];

  ngOnInit() {
    this.useDebounceTime();
  }

  useFilter() {
    this.clearResults();
    of(10, 15, 20, 25, 30) 
      .pipe(
        filter((value) => value > 20) 
      )
      .subscribe((filteredValue) => {
        this.results.push(`filter(): ${filteredValue}`);
      });
  }

  useTake() {
    this.clearResults(); 
    interval(1000) 
      .pipe(
        take(5) 
      )
      .subscribe((value) => {
        this.results.push(`take(): ${value}`);
      });
  }

  useDebounceTime() {
    this.clearResults(); 
    const inputElement = document.getElementById('debounceInput') as HTMLInputElement;
    if (!inputElement) return;

    fromEvent(inputElement, 'input')
      .pipe(
        debounceTime(1000) 
      )
      .subscribe(() => {
        this.results.push(`debounceTime(): Input value is "${inputElement.value}"`);
      });
  }

  clearResults() {
    this.results = [];
  }
}
