import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { NewsComponent } from './news/news.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'Breaking-News', pathMatch: 'full' },
  { path: 'Breaking-News', component: DefaultComponent},
  { path: 'Environmental', component: DefaultComponent},
  { path: 'Government', component: DefaultComponent},
  { path: 'Politics', component: DefaultComponent},
  { path: 'Sports', component: DefaultComponent},
  { path: 'Technology', component: DefaultComponent},
  { path: 'Weather', component: DefaultComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DefaultComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
