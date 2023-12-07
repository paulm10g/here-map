import {Component, Injector, OnInit} from '@angular/core';
import {PointsInterface} from "../../points.interface";
import {MapHereViewController, MapHereViewModel} from "../../services/tokens";
import {MapHereViewModelInterface} from "../../services/map-here-view-model.interface";
import {MapHereViewControllerInterface} from "../../services/map-here-view-controller.interface";
import {ChartInterface} from "../../../charts/components/chart.interface";


@Component({
  selector: 'app-map-here-view',
  templateUrl: './map-here-view.component.html',
  styleUrl: './map-here-view.component.scss'
})
export class MapHereViewComponent {
  private controller: MapHereViewControllerInterface;
  model: MapHereViewModelInterface;
  chartOptions = {show: false} as ChartInterface;
  constructor(private injector: Injector) {
    this.controller = this.injector.get(MapHereViewController);
    this.model = this.injector.get(MapHereViewModel);
  }

  change($event: number) {
    this.controller.change($event);
  }
}
