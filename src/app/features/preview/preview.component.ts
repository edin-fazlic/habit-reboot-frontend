import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Habit} from '../../models/habit.model';
import {Subscription} from 'rxjs';
import {Route} from '../../constants/route.enum';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {

  public formattedTime: string = '';
  public habit!:Habit;

  private time: number | undefined;
  private intervalId: number | undefined;
  private unsubscribe: Subscription[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.unsubscribe.push(this.activatedRoute.data.subscribe((data) => {
      this.habit = data['habit'];
      this.time = this.habit!.time;
      this.startTicking();
    }));
  }

  private startTicking() {
    this.intervalId = setInterval(() => {
      this.time!++;
      this.formattedTime = new Date(this.time! * 1000).toISOString().slice(11, 19);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }


  navigateToLogs() {
    this.router.navigate([
      this.habit?.id,
      Route.LOGS,
    ]);
  }

  navigateToMilestones() {
    this.router.navigate([
      this.habit?.id,
      Route.MILESTONES,
    ]);
  }

}
