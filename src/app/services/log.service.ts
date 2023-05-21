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

  getLogs(habitUuid: string): Observable<Log[]> {
    return this.http.get<Log[]>(`${this.baseUrl}/habit/${habitUuid}/list`);
  }

  createLog(habitUuid: number, log: Log): Observable<Log> {
    return this.http.post<Log>(`${this.baseUrl}/habit/${habitUuid}`, log);
  }
}
