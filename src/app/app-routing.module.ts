import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BodyMainComponent } from './layout/body-main.component';
import { newButtonComponent } from './new-button.component';
import { computersPageComponent } from './sideNavBar/computers-page.component';
import { myDrivePageComponent } from './sideNavBar/my-drive-page.component';
import { priorityPageComponent } from './sideNavBar/priority-page.component';
import { recentPageComponent } from './sideNavBar/recent-page.component';
import { sharedDrivesComponent } from './sideNavBar/shared-drives.component';
import { sharedWithMeComponent } from './sideNavBar/shared-with-me-page.component';
import { starredPageComponent } from './sideNavBar/starred-page.component';
import { trashPageComponent } from './sideNavBar/trash-page.component';

const routes: Routes = [
  { path: 'home', component: BodyMainComponent },
  { path: 'priority', component: priorityPageComponent},
  { path: 'sharedWithMe', component: sharedWithMeComponent},
  { path: 'myDrive', component: myDrivePageComponent},
  { path: 'computers', component: computersPageComponent},
  { path: 'trash', component: trashPageComponent},
  { path: 'starred', component: starredPageComponent},
  { path: 'sharedDrives', component: sharedDrivesComponent},
  { path: 'newModal', component: newButtonComponent},
  { path: 'recent', component: recentPageComponent},
  { path: '',   redirectTo: '/myDrive', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
