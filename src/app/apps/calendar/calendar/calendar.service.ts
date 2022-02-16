import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {calendars} from './calendar-data';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  Calendars: any[] = [];
  loginStatusService = false;

  detailId = -1;
  showEdit = false;



  constructor(public http: HttpClient) {
  }

  public getCalendar(): Observable<any> {
    return of(calendars);
  }

  // tslint:disable-next-line:typedef
  public addPost(cl: any) {
    this.Calendars.splice(0, 0, cl);
  }

  public deletePost(id: number) {
    this.Calendars = this.Calendars.filter(b => b.id !== id);
  }

}

export class CalendarServiceService {
}

