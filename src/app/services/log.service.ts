import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Log} from '../models/log.model';

@Injectable()
export class LogService {

  constructor() {
  }

  getLogs(habitId: number): Observable<Log[]> {
    return of([
      {
        time: 256,
        reason: 'I was strong',
      },
      {
        time: 3000,
        reason: 'null',
      }
    ]);
  }
}
