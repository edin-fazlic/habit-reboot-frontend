import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Habit} from '../models/habit.model';

@Injectable()
export class HabitService {

  private baseUrl = "http://localhost:8080/habit";

  constructor(private http: HttpClient) {
  }

  getHabit(id:number): Observable<Habit> {
    return this.http.get<Habit>(`${this.baseUrl}/${id}`);
  }

  createHabit(habit:Habit): Observable<Habit> {
    return this.http.post<Habit>(`${this.baseUrl}`, habit);
  }
}
