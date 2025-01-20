import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    form : FormGroup;
    initialValue : any;

    constructor(private fb: FormBuilder){
        this.form = this.fb.group({
            name: [''],
            email: [''],
            message: ['']
        });
        this.initialValue = this.form.value;
    }

    unsavedChanges(): boolean{
        return JSON.stringify(this.form.value)!== JSON.stringify(this.initialValue);
    }
}
