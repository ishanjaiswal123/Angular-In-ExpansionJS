import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentsModule } from './components/components.module';
import { CombinationGuardService } from './services/combination-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    // ReactiveFormsModule,
    // FormsModule
  ],
  providers: [
    CombinationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
