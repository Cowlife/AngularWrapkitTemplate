import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {routes} from './routes.data';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  Routes: any[] = [];
  loginStatusService = false;

  detailId = -1;
  showEdit = false;



  constructor(public http: HttpClient) {
  }

  public getRoutes(): Observable<any> {
    return of(routes);
  }

  // tslint:disable-next-line:typedef
  public addPost(cl: any) {
    this.Routes.splice(0, 0, cl);
  }

  public deletePost(id: number) {
    this.Routes = this.Routes.filter(b => b.id !== id);
  }

}

export class RoutesServiceService {
}
