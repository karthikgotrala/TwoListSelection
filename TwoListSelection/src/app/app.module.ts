import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TwolistselctionComponent } from './twolistselction/twolistselction.component';
import { FilterlistComponent } from './filterlist/filterlist.component';
import { KeywordsearchPipe } from './pipes/keywordsearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TwolistselctionComponent,
    FilterlistComponent,
    KeywordsearchPipe
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
