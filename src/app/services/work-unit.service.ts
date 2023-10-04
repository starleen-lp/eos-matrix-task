import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkUnit } from '../interfaces/work-unit.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkUnitService {
  private workUnitsUrl = '../assets/getWorkUnits.json';

  constructor(private http: HttpClient) { }

  getWorkUnits(): Observable<WorkUnit[]> {
    return this.http.get<WorkUnit[]>(this.workUnitsUrl);
  }
}
