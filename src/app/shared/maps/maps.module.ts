import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapHereComponent} from './components/map-here/map-here.component'
import {MapHereViewComponent} from "./components/map-here-view/map-here-view.component";
import {ChartsModule} from "../charts/charts.module";
import {FormsModule} from "@angular/forms";
import {AppFormsModule} from "../forms/app-forms.module";


@NgModule({
  declarations: [
    MapHereComponent,
    MapHereViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    AppFormsModule,
  ],
  exports: [
    MapHereViewComponent
  ]
})
export class MapsModule {
}
