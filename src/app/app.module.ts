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
import {PostFullComponent} from './search-results/post-full/post-full.component';
import {PostShortComponent} from './search-results/post-short/post-short.component';
import {ApiService} from '../shared/services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {AddPostFormComponent} from './add-post-form/add-post-form.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    HomeComponent,
    SearchResultsComponent,
    PostFullComponent,
    PostShortComponent,
    AddPostFormComponent,
    AddbuttonComponent
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
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'add', component: AddPostFormComponent},
      {path: 'search/:phrase', component: SearchResultsComponent},
      {path: 'post/:id', component: PostFullComponent}
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
