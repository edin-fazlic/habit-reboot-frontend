import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Log} from '../models/log.model';
import {LogService} from '../services/log.service';

@Injectable()
export class LogsResolver implements Resolve<Log[]> {

  constructor(private logService: LogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Log[]> {
    const id = route.paramMap.get('habitId');
    if (!id) {
      // handle error
    }
    return this.logService.getLogs(+id!);
  }
}
