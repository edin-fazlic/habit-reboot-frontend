import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PreviewComponent} from './preview/preview.component';
import {LogsComponent} from './logs/logs.component';
import {MilestonesComponent} from './milestones/milestones.component';
import {MilestonesAddComponent} from './milestones-add/milestones-add.component';
import {MilestonesEditComponent} from './milestones-edit/milestones-edit.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'habit123',
    component:PreviewComponent,
  },
  {
    path:'habit123/logs',
    component:LogsComponent,
  },
  {
    path:'habit123/milestones',
    component:MilestonesComponent,
  },
  {
    path:'habit123/milestones/add',
    component:MilestonesAddComponent,
  },
  {
    path:'habit123/milestones/milestoneId',
    component:MilestonesEditComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
