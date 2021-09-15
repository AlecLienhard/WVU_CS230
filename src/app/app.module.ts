import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './Cards/cards.component';
import { searchBarComponent } from './header/search-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { SideNavBarButtonsComponent } from './sideNavBar/side-nav-bar-buttons.component';

import { SideNavBarComponent } from './sideNavBar/side-nav-bar.component';
import { topNavMenuItemsComponent } from './top-nav-menu-items/top-nav-menu-items.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    CardsComponent,
    topNavMenuItemsComponent,
    SideNavBarButtonsComponent,
    searchBarComponent
         
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
