import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {berries, berries2} from './berry.data';

@Injectable({
  providedIn: 'root'
})
export class BerryService {

  Berries: any[] = [];
  loginStatusService = false;

  detailId = -1;
  showEdit = false;



  constructor(public http: HttpClient) {
  }

  public getBerry(): Observable<any> {
    return of(berries);
  }

  // tslint:disable-next-line:typedef
  public addPost(cl: any) {
    this.Berries.splice(0, 0, cl);

  }

  public deletePost(id: number) {
    this.Berries = this.Berries.filter(b => b.id !== id);
  }

}

export class BerryServiceService {
}

