import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { priorityCardsComponent } from './Cards/priority-cards.component';
import { navBarLayoutComponent } from './header/nav-bar-layout.component';
import { searchBarComponent } from './header/search-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { BodyMainComponent } from './layout/body-main.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { rightNavBarComponent } from './right-nav-bar/right-nav-bar.component';
import { computersPageComponent } from './sideNavBar/computers-page.component';
import { myDrivePageComponent } from './sideNavBar/my-drive-page.component';
import { priorityPageComponent } from './sideNavBar/priority-page.component';
import { recentPageComponent } from './sideNavBar/recent-page.component';
import { sharedDrivesComponent } from './sideNavBar/shared-drives.component';
import { SideNavBarButtonsComponent } from './sideNavBar/side-nav-bar-buttons.component';

import { SideNavBarComponent } from './sideNavBar/side-nav-bar.component';
import { starredPageComponent } from './sideNavBar/starred-page.component';
import { topNavMenuItemsComponent } from './top-nav-menu-items/top-nav-menu-items.component';
import { AppRoutingModule } from './app-routing.module';
import { sharedWithMeComponent } from './sideNavBar/shared-with-me-page.component';
import { listComponent } from './Lists/list.component';
import { trashPageComponent } from './sideNavBar/trash-page.component';
import { suggestedCardsComponent } from './Cards/suggested-card.component';
import { priorityComponent } from './Cards/priority.component';
import { HttpClientModule } from '@angular/common/http';
import { EditInfoComponent } from './edit-info.component';
import { FormsModule } from '@angular/forms';
import { loginComponent } from './login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthComponent } from 'src/auth/auth.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    priorityCardsComponent,
    topNavMenuItemsComponent,
    SideNavBarButtonsComponent,
    searchBarComponent,
    LayoutMainComponent,
    navBarLayoutComponent,
    rightNavBarComponent,
    BodyMainComponent,
    sharedDrivesComponent,
    priorityPageComponent,
    computersPageComponent,
    starredPageComponent,
    recentPageComponent,
    myDrivePageComponent,
    sharedWithMeComponent,
    listComponent,
    trashPageComponent,
    suggestedCardsComponent,
    priorityCardsComponent,
    priorityComponent,
    loginComponent,
    EditInfoComponent,
    AuthComponent
    
    

    
  

    

   
  
    
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'drive-app'),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
