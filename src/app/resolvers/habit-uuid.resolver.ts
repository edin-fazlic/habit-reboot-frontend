import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Route} from '../constants/route.enum';

@Injectable()
export class HabitUuidResolver implements Resolve<string> {

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): string {
    return route.paramMap.get(Route.HABIT_UUID)!;
  }
}
