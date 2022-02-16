import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {routeshgss} from './route-hgss-data';
import {itemhgss} from "./item-hgss-data";

@Injectable({
  providedIn: 'root'
})
export class RoutesHGSSService {

  RoutesHGSS: any[] = [];
  ItemsHGSS: any[] = [];
  detailId = -1;
  showEdit = false;



  constructor(public http: HttpClient) {
  }
// tslint:disable-next-line:typedef
  public addPost(cl: any) {
    this.RoutesHGSS.splice(0, 0, cl);
  }
}
