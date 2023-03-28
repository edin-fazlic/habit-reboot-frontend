import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HabitService} from '../services/habit.service';
import {Habit} from '../models/habit.model';
import {ResolverProperty} from '../constants/resolver-property.enum';

@Injectable()
export class HabitResolver implements Resolve<Habit> {

  constructor(private habitService: HabitService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Habit> {
    const habitId: string = route.data[ResolverProperty.HABIT_ID];
    return this.habitService.getHabit(+habitId);
  }
}
