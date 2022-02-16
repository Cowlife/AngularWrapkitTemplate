import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsRoutingModule } from './apps-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppsComponent } from './apps.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

import { ServiceblogService } from './blog/blog-service.service';
import { RelayOnComponent } from './about/About-Components/relay-on/relay-on.component';
import { TopContentComponent } from './about/About-Components/top-content/top-content.component';

import { FullComponent } from './layout/full/full.component';

import { BannerComponent } from './shared/banner/banner.component';
import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
// import { Relay2Component } from './about/About-Components/relay2/relay2.component';
import { RelayOn2Component } from './about/About-Components/relay-on2/relay-on2.component';
import { RelayOn3Component } from './about/About-Components/relay-on3/relay-on3.component';
import { RelayOn4Component } from './about/About-Components/relay-on4/relay-on4.component';
import { RelayOn5Component } from './about/About-Components/relay-on5/relay-on5.component';
import { RelayOn6Component } from './about/About-Components/relay-on6/relay-on6.component';
import { RelayOn7Component } from './about/About-Components/relay-on7/relay-on7.component';
import { RelayOn8Component } from './about/About-Components/relay-on8/relay-on8.component';
import { RelayOn9Component } from './about/About-Components/relay-on9/relay-on9.component';
import { RelayOn10Component } from './about/About-Components/relay-on10/relay-on10.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { DetailComponent } from './calendar/calendar/detail/detail.component';
import { BerryComponent } from './berry/berry.component';
import { RoutesHGSSComponent } from './routes/routes-hgss/routes-hgss.component';
import { RoutesORASComponent } from './routes/routes-oras/routes-oras.component';
import { RoutesPLATComponent } from './routes/routes-plat/routes-plat.component';
import { RoutesXYComponent } from './routes/routes-xy/routes-xy.component';
import { RoutesComponent } from './routes/routes.component';















@NgModule({
  declarations: [
    AppsComponent,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
    RelayOn2Component,
    RelayOn3Component,
    RelayOn4Component,
    RelayOn5Component,
    RelayOn6Component,
    RelayOn7Component,
    RelayOn8Component,
    RelayOn9Component,
    RelayOn10Component,
    CalendarComponent,
    DetailComponent,
    BerryComponent,
    RoutesHGSSComponent,
    RoutesORASComponent,
    RoutesPLATComponent,
    RoutesXYComponent,
    RoutesComponent,










    // Relay2Component,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [ServiceblogService],
})
export class AppsModule {}
