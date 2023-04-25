import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Log} from '../models/log.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class LogService {

  private readonly baseUrl: string = `${environment.backendUrl}/log`;

  constructor(private http: HttpClient) {
  }

  getLogs(habitId: number): Observable<Log[]> {
    return this.http.get<Log[]>(`${this.baseUrl}/${habitId}/list`);
  }

  createLog(habitId: number, log: Log): Observable<Log> {
    return this.http.post<Log>(`${this.baseUrl}/${habitId}`, log);
  }
}
