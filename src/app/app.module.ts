import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GitDetailComponent } from './git-detail/git-detail.component';
import { DateCountPipe } from './date-count.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GitDetailComponent,
    DateCountPipe,

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
