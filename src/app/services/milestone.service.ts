import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Milestone} from '../models/milestone.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class MilestoneService {

  private readonly baseUrl: string = `${environment.backendUrl}/milestone`;

  constructor(private http: HttpClient) {
  }

  getMilestones(habitId: number): Observable<Milestone[]> {
    return this.http.get<Milestone[]>(`${this.baseUrl}/${habitId}/list`);
  }

  getMilestone(milestoneId: number): Observable<Milestone> {
    return this.http.get<Milestone>(`${this.baseUrl}/${milestoneId}`);
  }

  createMilestone(milestone: Milestone): Observable<Milestone> {
    return this.http.post<Milestone>(`${this.baseUrl}`, milestone);
  }

  updateMilestone(milestone: Milestone): Observable<Milestone> {
    return this.http.put<Milestone>(`${this.baseUrl}/${milestone.id}`, milestone);
  }

  deleteMilestone(milestoneId: number): Observable<null> {
    this.http.delete(`${this.baseUrl}/${milestoneId}`);
    return of(null);
  }
}
