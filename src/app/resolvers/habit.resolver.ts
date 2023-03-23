import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HabitService} from '../services/habit.service';
import {Habit} from '../models/habit.model';

@Injectable()
export class HabitResolver implements Resolve<Habit> {


  constructor(private habitService: HabitService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Habit> {
    const id = route.paramMap.get('habitId');
    if(!id) {
      // handle error
    }
    return this.habitService.getHabit(+id!);
  }
}
