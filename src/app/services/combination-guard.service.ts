import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CombinationGuardService implements CanActivate {
  canActivate(): boolean {
    const inputEle = document.querySelector(
      '#debounceInput'
    ) as HTMLInputElement;
    return inputEle.value === 'admin';
  }
}
