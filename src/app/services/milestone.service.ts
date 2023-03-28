import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Milestone} from '../models/milestone.model';

@Injectable()
export class MilestoneService {

  constructor() {
  }

  getMilestones(habitId: number): Observable<Milestone[]> {
    return of([
      {
        id: 54,
        color: '#f0af9b',
        title: 'First week',
        time: 1000 * 60 * 60 * 24 * 7,
        reached: false,
      },
      {
        id: 54,
        color: '#adeeaf',
        title: 'First day',
        time: 1000 * 60 * 60 * 24,
        reached: false,
      },
    ])
  }
}
