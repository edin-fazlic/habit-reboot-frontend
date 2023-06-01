import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BugReport} from '../models/bug-report.model';
import {BugReportService} from '../services/bug-report.service';

@Injectable()
export class BugReportsResolver implements Resolve<BugReport[]> {

  constructor(private bugReportService: BugReportService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BugReport[]> {
    return this.bugReportService.getBugReports();
  }
}
