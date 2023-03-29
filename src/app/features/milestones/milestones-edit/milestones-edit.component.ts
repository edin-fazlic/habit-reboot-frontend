import {Component, OnInit} from '@angular/core';
import {Milestone} from '../../../models/milestone.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ResolverProperty} from '../../../constants/resolver-property.enum';
import {MilestoneService} from '../../../services/milestone.service';
import {Route} from '../../../constants/route.enum';

@Component({
  selector: 'app-milestones-edit',
  templateUrl: './milestones-edit.component.html',
  styleUrls: ['./milestones-edit.component.css']
})
export class MilestonesEditComponent implements OnInit {

  public milestone!: Milestone;
  private habitId!: number;

  constructor(private milestoneService: MilestoneService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.milestone = data[ResolverProperty.MILESTONE];
      this.habitId = data[ResolverProperty.HABIT_ID];
    });
  }

  updateMilestone(milestone: Milestone): void {
    this.milestoneService.updateMilestone(milestone).subscribe(() => {
      this.navigateToMilestones();
    });
  }

  private navigateToMilestones() {
    this.router.navigate([
      this.habitId,
      Route.MILESTONES,
    ]);
  }
}
