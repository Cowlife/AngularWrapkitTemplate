import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../../calendar/calendar/calendar.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {RoutesHGSSService} from './routes-hgss.service';
import {Calendar} from '../../calendar/calendar/calendar-type';
import {RouteHGSS, routeshgss} from './route-hgss-data';
import {ItemHGSS, itemhgss} from "./item-hgss-data";


@Component({
  selector: 'app-routes-hgss',
  templateUrl: './routes-hgss.component.html',
  styleUrls: ['./routes-hgss.component.css']
})
export class RoutesHGSSComponent implements OnInit {
  itemSelling: ItemHGSS[];
  topSelling: RouteHGSS[];





  constructor() {

    this.topSelling = routeshgss;
    this.itemSelling = itemhgss;


  }




  public show = false;
  isShow = true;
  isShow2 = true;
  ngOnInit() {  }


  toggleDisplay() {
    this.isShow = !this.isShow;

    if (!this.isShow2) {
      this.isShow2 = !this.isShow2;
    }

  }


  toggleDisplay2() {
    this.isShow2 = !this.isShow2;

    if (!this.isShow) {
      this.isShow = !this.isShow;
    }

  }



}
