import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of } from 'rxjs';

interface Item {
  id?: number;
  body: string;
  title: string;
}

@Component({
  selector: 'app-crud',
  standalone: false, 
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  items: Item[] = [];
  newItem: Item = { title: '', body: '' };
  selectedItem: Item | null = null;
  errorMessage = '';

  constructor(private http: HttpClient) {
    this.getItems();
  }

  getItems() {
    this.http.get<Item[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorMessage = 'Failed to load items';
          return of([]);
        })
      )
      .subscribe(items => this.items = items.slice(0, 10)); // Limit to 10 items for simplicity
  }

  createItem() {
    this.http.post<Item>('https://jsonplaceholder.typicode.com/posts', this.newItem)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorMessage = 'Failed to create item';
          return of(null);
        })
      )
      .subscribe(item => {
        if (item) {
          this.items.push(item);
          this.newItem = { title: '', body: '' };
        }
      });
  }

  updateItem() {
    if (this.selectedItem && this.selectedItem.id) {
      this.http.put<Item>(`https://jsonplaceholder.typicode.com/posts/${this.selectedItem.id}`, this.selectedItem)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.errorMessage = 'Failed to update item';
            return of(null);
          })
        )
        .subscribe(updatedItem => {
          if (updatedItem) {
            const index = this.items.findIndex(item => item.id === updatedItem.id);
            if (index !== -1) {
              this.items[index] = updatedItem;
            }
            this.selectedItem = null;
          }
        });
    }
  }

  deleteItem(id: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorMessage = 'Failed to delete item';
          return of(null);
        })
      )
      .subscribe(() => {
        this.items = this.items.filter(item => item.id !== id);
      });
  }

  selectItem(item: Item) {
    this.selectedItem = { ...item };
  }
}