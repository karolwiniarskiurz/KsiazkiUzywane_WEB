import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchBoxComponent} from './searchbox/search-box.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {SearchResultsComponent} from './search-results/search-results.component';
import {PostFullComponent} from './searchbox/post-full/post-full.component';
import {PostShortComponent} from './searchbox/post-short/post-short.component';
import {AddPostFormComponent} from './add-post-form/add-post-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    HomeComponent,
    SearchResultsComponent,
    PostFullComponent,
    PostShortComponent,
    AddPostFormComponent
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
    MatSelectModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'add', component: AddPostFormComponent},
      {path: 'search/:phrase', component: SearchResultsComponent},
      {path: 'post/:id', component: PostFullComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
