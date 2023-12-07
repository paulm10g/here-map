import {PointsInterface} from "../points.interface";
import {Observable} from "rxjs";
import {MapHereViewDataInterface, MapHereViewDataPointsInterface} from "./map-here-view-data.interface";
import {ChartInterface} from "../../charts/components/chart.interface";

export interface MapHereViewModelInterface {
  points(): Observable<Array<MapHereViewDataPointsInterface>>;
  data(): Observable<Array<MapHereViewDataInterface>>;
  selectedPath(): Observable<number>;

  chartOptions(): Observable<ChartInterface>;
}
