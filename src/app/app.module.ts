import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './Cards/cards.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { SideNavBarComponent } from './sideNavBar/side-nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    CardsComponent    
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
