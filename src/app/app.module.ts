import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitdetailComponent } from './gitdetail/gitdetail.component';
import {RouterModule} from '@angular/router';
import {PostsService} from './posts.service';


const ROUTES = [
  {
    path: '',
    redirectTo: 'gitdetail',
    pathMatch: 'full'
  },
  {
    path: 'gitdetail',
    component: GitdetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GitdetailComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
