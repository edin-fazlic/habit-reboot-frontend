import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HabitService} from '../services/habit.service';
import {Habit} from '../models/habit.model';
import {Route} from '../constants/route.enum';

@Injectable()
export class HabitResolver implements Resolve<Habit> {

  constructor(private habitService: HabitService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Habit> {
    const habitUuid: string = route.paramMap.get(Route.HABIT_UUID)!;
    return this.habitService.getHabit(habitUuid);
  }
}
