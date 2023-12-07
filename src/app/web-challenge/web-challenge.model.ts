import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of} from "rxjs";
import {MapHereViewModelInterface} from "../shared/maps/services/map-here-view-model.interface";
import {PointsInterface} from "../shared/maps/points.interface";
import {
  MapHereViewDataInterface,
  MapHereViewDataPointsInterface
} from "../shared/maps/services/map-here-view-data.interface";
import {ChartInterface} from "../shared/charts/components/chart.interface";

@Injectable({providedIn: 'root'})
export class WebChallengeModel implements MapHereViewModelInterface {
  points$: BehaviorSubject<Array<MapHereViewDataPointsInterface>> = new BehaviorSubject<Array<MapHereViewDataPointsInterface>>([])
  chartOptions$: BehaviorSubject<ChartInterface> = new BehaviorSubject<ChartInterface>({
    show: false,
    exportEnabled: false,
    title: {
      text: 'Speed in time',
    },
    data: [{
      type: "line",
      dataPoints: []
    }
    ]
  })
  path: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  data$: BehaviorSubject<Array<MapHereViewDataInterface>> = new BehaviorSubject<Array<MapHereViewDataInterface>>([])

  constructor() {
  }

  data(): Observable<Array<MapHereViewDataInterface>> {
    return this.data$.asObservable();
  }

  points(): Observable<Array<MapHereViewDataPointsInterface>> {
    return this.points$.asObservable();
  }

  selectedPath(): Observable<number> {
    return this.path.asObservable();
  }

  chartOptions(): Observable<ChartInterface> {
    return this.chartOptions$.asObservable();
  }
}
