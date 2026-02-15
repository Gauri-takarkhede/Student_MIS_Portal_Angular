import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElectivesService {
  constructor() {}
  private electivesSubject = new BehaviorSubject<any[]>([]);
  electives$ = this.electivesSubject.asObservable();

  setElectives(data: any[]) {
    this.electivesSubject.next(data);
  }

  addElective(newElective: any) {
    const current = this.electivesSubject.value;
    this.electivesSubject.next([...current, newElective]);
  }

  removeElective(id: string) {
    const current = this.electivesSubject.value;
    this.electivesSubject.next(current.filter((e) => e._id !== id));
  }
}
