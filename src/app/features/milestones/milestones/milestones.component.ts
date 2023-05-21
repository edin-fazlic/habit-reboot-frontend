import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Milestone} from '../../../models/milestone.model';
import {ResolverProperty} from '../../../constants/resolver-property.enum';
import {Route} from '../../../constants/route.enum';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.css']
})
export class MilestonesComponent implements OnInit, OnDestroy {

  public milestones: Milestone[] = [];
  public displayedColumns: string[] = [];
  private habitUuid!: string;
  private unsubscribe: Subscription[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['title', 'time', 'reached', 'action'];
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.milestones = data[ResolverProperty.MILESTONES];
      this.habitUuid = data[ResolverProperty.HABIT_UUID];
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  goToAddMilestone(): void {
    this.router.navigate([
      this.habitUuid,
      Route.MILESTONES,
      Route.ADD,
    ]);
  }

  editMilestone(milestoneId: number): void {
    this.router.navigate([
      this.habitUuid,
      Route.MILESTONES,
      milestoneId,
    ]);
  }

  goBack(): void {
    this.router.navigate([
      this.habitUuid,
    ]);
  }
}
