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
        color: 'FF0000',
        title: 'First week',
        time: 1000 * 60 * 60 * 24 * 7,
        reached: false,
      },
      {
        id: 54,
        color: '00FF00',
        title: 'First day',
        time: 1000 * 60 * 60 * 24,
        reached: false,
      },
    ])
  }
}
