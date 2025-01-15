import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CreationComponent } from './creation/creation.component';
import { TransformationComponent } from './transformation/transformation.component';
import { FilteringComponent } from './filtering/filtering.component';
import { CombinationComponent } from './combination/combination.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    // NavbarComponent,
    CreationComponent,
    TransformationComponent,
    FilteringComponent,
    CombinationComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
