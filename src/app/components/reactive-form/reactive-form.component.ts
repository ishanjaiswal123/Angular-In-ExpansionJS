import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      personalDetails: this.fb.group({
        firstName: [null, [Validators.required, Validators.minLength(3)]],
        lastName: [null, [Validators.required, Validators.minLength(3)]],
        age: [null, [Validators.required, Validators.min(18)]],
      }),
      addresses: this.fb.array([this.createAddressesGroup()]),
    });
  }
  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

  createAddressesGroup() {
    return this.fb.group({
      street: [null, Validators.required],
    });
  }

  addAddress() {
    this.addresses.push(this.createAddressesGroup());
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  getControl(index : number){
    return this.addresses.at(index).get('street');
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      console.log('Form value', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
