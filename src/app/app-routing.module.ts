import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CustomPreloadingStrategyService} from './apps/custom-preloading-strategy.service';



const routes: Routes = [
  {
    path: '',
    children: [
      // { path: '', redirectTo: '/apps', pathMatch: 'full' },
      { path: '', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
      { path: 'b', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
