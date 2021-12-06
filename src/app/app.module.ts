import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {KatexModule} from "ng-katex";
import { FormulaComponent } from './fracciones/formula.component';
import { MultipleComponent } from './multiple/multiple.component';
import { JuegoComponent } from './juego/juego.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FormulaComponent,
    MultipleComponent,
    JuegoComponent
  ],
    imports: [
        BrowserModule,
        KatexModule,
        FontAwesomeModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
