import { Component, OnInit } from '@angular/core';
import {Blog} from '../../blog/blog-type';
import {ServiceblogService} from '../../blog/blog-service.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Calendar} from './calendar-type';
import {CalendarService} from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  constructor(
    public service: CalendarService,
    public router: Router,
    public http: HttpClient
  ) {
    this.service.showEdit = false;
  }

  ngOnInit(): void {
    if (this.service.Calendars.length === 0) {
      this.service.getCalendar().subscribe((d: any) => (this.service.Calendars = d));
    }
  }

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }

  viewDetail(id: number) {
    this.service.detailId = id;

    if (this.service.loginStatusService) { this.service.showEdit = true; }

    this.router.navigate(['/calendarDetail', id]);
  }

}
