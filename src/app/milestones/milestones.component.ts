import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Milestone} from '../models/milestone.model';
import {ResolverProperty} from '../constants/resolver-property.enum';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.css']
})
export class MilestonesComponent {

  public milestones: Milestone[] | undefined;
  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.unsubscribe = this.activatedRoute.data.subscribe((data) => {
      this.milestones = data[ResolverProperty.MILESTONES];
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }
}
