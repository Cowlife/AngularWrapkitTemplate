import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Calendar} from '../calendar-type';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(activatedRouter: ActivatedRoute, public service: CalendarService, public router: Router) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  id: any;
  calendarDetail: Calendar | null = null;

  // editPost(){
  //   this.router.navigate([('/editPost'), this.service?.detailId]);

  // }




  ngOnInit(): void {
    this.calendarDetail = this.service.Calendars.filter(x => x.id === +this.id)[0];

  }

  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.service.showEdit=false;
    this.router.navigate([('/post')]);

  }

  editPost() {
    this.service.showEdit=false;
    this.router.navigate([('/editPost'), this.calendarDetail?.id]);
  }

}
