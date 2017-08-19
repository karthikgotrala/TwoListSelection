import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TwolistselctionComponent } from './twolistselction/twolistselction.component';
import { FilterlistComponent } from './filterlist/filterlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TwolistselctionComponent,
    FilterlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
