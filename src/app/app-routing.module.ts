import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './components/creation/creation.component';
import { TransformationComponent } from './components/transformation/transformation.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { CombinationComponent } from './components/combination/combination.component';
import { CombinationGuardService } from './services/combination-guard.service';

const routes: Routes = [
  {path: "creation" , component: CreationComponent},
  {path: "transformation", component : TransformationComponent},
  {path: "filtering" , component: FilteringComponent},
  {path: "combination", component: CombinationComponent, canActivate: [CombinationGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
