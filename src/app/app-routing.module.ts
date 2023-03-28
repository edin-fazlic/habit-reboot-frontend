import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PreviewComponent} from './preview/preview.component';
import {LogsComponent} from './logs/logs.component';
import {MilestonesComponent} from './milestones/milestones.component';
import {MilestonesAddComponent} from './milestones-add/milestones-add.component';
import {MilestonesEditComponent} from './milestones-edit/milestones-edit.component';
import {HabitResolver} from './resolvers/habit.resolver';
import {LogsResolver} from './resolvers/logs.resolver';
import {MilestonesResolver} from './resolvers/milestones.resolver';
import {ResolverProperty} from './constants/resolver-property.enum';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: ':habitId',
    component: PreviewComponent,
    resolve: {
      [ResolverProperty.HABIT]: HabitResolver
    }
  },
  {
    path: ':habitId/logs',
    component: LogsComponent,
    resolve: {
      [ResolverProperty.LOGS]: LogsResolver,
    }
  },
  {
    path: ':habitId/milestones',
    component: MilestonesComponent,
    resolve: {
      [ResolverProperty.MILESTONES]: MilestonesResolver,
    }
  },
  {
    path: 'habit123/milestones/add',
    component: MilestonesAddComponent,
  },
  {
    path: 'habit123/milestones/milestoneId',
    component: MilestonesEditComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
