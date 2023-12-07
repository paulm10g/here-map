import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component"
import {inject} from "@angular/core";
import {WebChallengeController} from "./web-challenge/web-challenge.controller";
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'web-challenge',
    loadComponent: () => import('./web-challenge/web-challenge/web-challenge.component').then(m => m.WebChallengeComponent),
    resolve: {data: () => inject(WebChallengeController).resolve()}
  }
];
