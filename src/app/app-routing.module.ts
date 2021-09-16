import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BodyMainComponent } from './layout/body-main.component';
import { computersPageComponent } from './sideNavBar/computers-page.component';
import { myDrivePageComponent } from './sideNavBar/my-drive-page.component';
import { priorityPageComponent } from './sideNavBar/priority-page.component';
import { recentPageComponent } from './sideNavBar/recent-page.component';
import { sharedDrivesComponent } from './sideNavBar/shared-drives.component';
import { starredPageComponent } from './sideNavBar/starred-page.component';

const routes: Routes = [
  { path: 'home', component: BodyMainComponent },
  { path: 'priority', component: priorityPageComponent},
  { path: 'myDrive', component: myDrivePageComponent},
  { path: 'computers', component: computersPageComponent},
  { path: 'starred', component: starredPageComponent},
  { path: 'sharedDrives', component: sharedDrivesComponent},
  { path: 'recent', component: recentPageComponent},
  { path: '',   redirectTo: '/myDrive', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
