import {MapHereViewControllerInterface} from "../shared/maps/services/map-here-view-controller.interface";
import {Injectable} from "@angular/core";
import {of} from "rxjs";
import {WebChallengeAdapter} from "./web-challenge.adapter";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {WebChallengeModel} from "./web-challenge.model";
import {ChartInterface} from "../shared/charts/components/chart.interface";

@Injectable({providedIn: 'root'})
export class WebChallengeController implements MapHereViewControllerInterface {
  private fileUrl = 'assets/web_challenge.json'
  dps = [{x: 1, y: 10}];
  chartOptions: ChartInterface = {
    show: true,
    exportEnabled: true,
    title: {
      text: "speed changes in time"
    },
    data: [{
      type: "line",
      dataPoints: this.dps
    }]
  }

  constructor(private adapter: WebChallengeAdapter,
              private model: WebChallengeModel) {
  }

  init() {
    this.adapter.download(this.fileUrl).subscribe(r => {
      this.model.data$.next(r);
    });
    return of(true);
  }

  clear() {
  }

  change(view: number) {
    const points = this.model.data$.getValue().find(r => r.id == view)?.points ?? [];
    this.model.points$.next(points);
    this.chartOptions.show = !!points?.length;
    this.chartOptions.data[0].dataPoints = points;
    this.model.chartOptions$.next({...this.chartOptions})
  }

  resolve(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): boolean {
    this.init();
    return true;
  };
}
