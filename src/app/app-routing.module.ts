import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedPostComponent } from './approved-post/approved-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QueuePostComponent } from './queue-post/queue-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'approved-post', component: ApprovedPostComponent},
  {path: 'queue-post', component: QueuePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
