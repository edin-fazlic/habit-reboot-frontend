import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Milestone} from '../models/milestone.model';
import {MilestoneService} from '../services/milestone.service';

@Injectable()
export class MilestonesResolver implements Resolve<Milestone[]> {

  constructor(private milestoneService: MilestoneService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Milestone[]> {
    const id = route.paramMap.get('habitId');
    if (!id) {
      // handle error
    }
    return this.milestoneService.getMilestones(+id!);
  }
}
