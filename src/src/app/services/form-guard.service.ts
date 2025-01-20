import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { FormComponent } from '../components/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuardService implements CanDeactivate<FormComponent> {

  canDeactivate(component: FormComponent): boolean {
    if(component.unsavedChanges()){
      return confirm("You are leaving this form without saving Changes");
    }
    return true;
  }
}
