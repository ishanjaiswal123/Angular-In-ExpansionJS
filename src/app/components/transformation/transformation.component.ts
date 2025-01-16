import { Component } from '@angular/core';
import { of, from, Observable } from 'rxjs';
import { map, mergeMap, switchMap, concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-transformation',
  standalone: false,
  templateUrl: './transformation.component.html',
  styleUrl: './transformation.component.css',
})
export class TransformationComponent {
  results: string[] = [];

  data: Observable<number[]> = of([1, 2, 3, 4, 5]);

  useMap() {
    this.clearResults();
    this.data.pipe(map((num) => num.map((n) => n * 2))).subscribe((num) => {
      this.results.push(`map: ${num}`);
    });
  }

  useMergeMap() {
    this.clearResults();
    from([1, 2, 3])
      .pipe(mergeMap((value) => of(`mergeMap: Value ${value}`)))
      .subscribe((res) => {
        this.results.push(res);
      });
  }

  useSwitchMap() {
    this.clearResults();
    from([1, 2, 3])
      .pipe(
        switchMap((value) => {
          return of(`switchMap: Value ${value}`).pipe(delay(1000));
        })
      )
      .subscribe((result) => {
        this.results.push(result);
      });
  }

  useConcatMap() {
    this.clearResults();
    from([1, 2, 3])
      .pipe(
        concatMap((value) => {
          return of(`concatMap: Value ${value}`).pipe(delay(1000));
        })
      )
      .subscribe((result) => {
        this.results.push(result);
      });
  }

  clearResults() {
    this.results = [];
  }
}
