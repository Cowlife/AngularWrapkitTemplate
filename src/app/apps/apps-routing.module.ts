import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


import { FullComponent } from './layout/full/full.component';
import {CalendarComponent} from './calendar/calendar/calendar.component';
import {DetailComponent} from './calendar/calendar/detail/detail.component';
import {BerryComponent} from './berry/berry.component';
import {RoutesHGSSComponent} from './routes/routes-hgss/routes-hgss.component';
import {RoutesORASComponent} from './routes/routes-oras/routes-oras.component';
import {RoutesPLATComponent} from './routes/routes-plat/routes-plat.component';
import {RoutesXYComponent} from './routes/routes-xy/routes-xy.component';





const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'calendar', component: CalendarComponent},
      { path: 'calendarDetail/:id', component: DetailComponent },
      { path: 'berry', component: BerryComponent},
      { path: 'routesHGSS', component: RoutesHGSSComponent},
      { path: 'routesORAS', component: RoutesORASComponent},
      { path: 'routesPLAT', component: RoutesPLATComponent},
      { path: 'routesXY', component: RoutesXYComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
