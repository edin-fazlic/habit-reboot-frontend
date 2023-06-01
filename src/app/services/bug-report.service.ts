import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {BugReport} from '../models/bug-report.model';

@Injectable()
export class BugReportService {

  private readonly baseUrl: string = `${environment.backendUrl}/bug-report`;

  constructor(private http: HttpClient) {
  }

  sendScreenshot(bugReport: BugReport): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}`, bugReport);
  }

  getBugReports(): Observable<BugReport[]> {
    return this.http.get<BugReport[]>(`${this.baseUrl}`);
  }

  getBugReport(id:number): Observable<BugReport> {
    return this.http.get<BugReport>(`${this.baseUrl}/${id}`);
  }
}
