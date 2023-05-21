import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Log} from '../models/log.model';
import {LogService} from '../services/log.service';
import {Route} from '../constants/route.enum';

@Injectable()
export class LogsResolver implements Resolve<Log[]> {

  constructor(private logService: LogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Log[]> {
    const habitUuid: string = route.paramMap.get(Route.HABIT_UUID)!;
    return this.logService.getLogs(habitUuid);
  }
}
