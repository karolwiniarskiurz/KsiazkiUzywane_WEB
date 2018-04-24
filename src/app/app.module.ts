import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchBoxComponent } from './searchbox/search-box.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PostFullComponent } from './searchbox/post-full/post-full.component';
import { PostShortComponent } from './searchbox/post-short/post-short.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    HomeComponent,
    SearchResultsComponent,
    PostFullComponent,
    PostShortComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'search', component: SearchResultsComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
