import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { routing } from './app.routing'

import { UserService } from './providers/users.service'
import { CapitalizePipe } from './pipes/capitalize.pipe' 

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CapitalizePipe 
  ],
  providers: [UserService],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
