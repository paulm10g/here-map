import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {ChartDynamicComponent} from "./components/chart-dynamic/chart-dynamic.component";


@NgModule({
  declarations: [
    ChartDynamicComponent
  ],
  exports: [
    ChartDynamicComponent
  ],
  imports: [
    CommonModule,
    CanvasJSAngularChartsModule
  ]
})
export class ChartsModule {
}
