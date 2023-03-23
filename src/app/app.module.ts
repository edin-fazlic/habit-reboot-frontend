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
  ],
  providers: [
    HabitResolver,
    HabitService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
