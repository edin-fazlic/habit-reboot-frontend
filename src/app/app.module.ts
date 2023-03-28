import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './preview/preview.component';
import { LogsComponent } from './logs/logs.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { MilestonesEditComponent } from './milestones-edit/milestones-edit.component';
import { MilestonesAddComponent } from './milestones-add/milestones-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HabitResolver} from './resolvers/habit.resolver';
import {HabitService} from './services/habit.service';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {LogsResolver} from './resolvers/logs.resolver';
import {LogService} from './services/log.service';
import {MilestonesResolver} from './resolvers/milestones.resolver';
import {MilestoneService} from './services/milestone.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreviewComponent,
    LogsComponent,
    MilestonesComponent,
    MilestonesEditComponent,
    MilestonesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [
    HabitResolver,
    HabitService,
    LogsResolver,
    LogService,
    MilestonesResolver,
    MilestoneService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
