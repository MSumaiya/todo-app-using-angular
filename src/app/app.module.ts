import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytodosComponent } from './components/mytodos/mytodos.component';
import { AddtodosComponent } from './components/addtodos/addtodos.component';
import { DeletetodosComponent } from './components/deletetodos/deletetodos.component';
import { DisplaytodosComponent } from './components/displaytodos/displaytodos.component';

@NgModule({
  declarations: [
    AppComponent,
    MytodosComponent,
    AddtodosComponent,
    DeletetodosComponent,
    DisplaytodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
